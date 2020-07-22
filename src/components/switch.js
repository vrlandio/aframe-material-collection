/* global AFRAME,TWEEN,THREE */
/**
 * Switch Component for aframe-material-collection. Includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-switch
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-switch", {
	schema: {
		value: { type: "boolean", default: false },
		disabled: { type: "boolean", default: false },
		progressColor: { default: "#4db6ac" },
		handleColor: { default: "#606572" },
		handleDisabledColor: { default: "#afafaf" },
		railColor: { default: "#fff" },
		switchDuration: { type: "int", default: 0 },
		handleZIndex: { type: "number", default: 0.01 },
		intersectableClass: { default: "intersectable" },
		width: { type: "number", default: 0.3 },
		height: { type: "number", default: 0.1 },
		courser2d : { type: "boolean", default: false }
	},
	updateSchema() {

		if ( this.data ) {

			if ( this.data.disabled ) {

				if ( this.data.value ) {

					this.data.value = false;
					this.click();

				}

			} else {

				this.click();

			}
			this.setDisabled();

		}

	},
	init() {

		this.width = 0.3;
		this.height = 0.1;
		// Setup handle circle entity.
		this.handleEl = document.createElement( "a-circle" );
		this.handleEl.setAttribute( "radius", 0.055 );
		this.handleEl.setAttribute( "color", this.data.handleColor );
		this.handleEl.setAttribute( "shader", "flat" );
		//  this.handleEl.setAttribute('ui-ripple','size:0.1 0.1;color:#999;fadeDelay:300;duration:500');
		this.handleEl.setAttribute( "class", this.data.intersectableClass + " no-yoga-layout" );
		this.handleEl.setAttribute( "position", "-0.05 0 " + this.data.handleZIndex );
		this.handleEl.setAttribute( "segments", 6 );
		this.el.appendChild( this.handleEl );

		// Setup rail entity.
		this.railEl = document.createElement( "a-plane" );
		this.railEl.setAttribute( "width", "0.15" );
		this.railEl.setAttribute( "height", "0.05" );
		this.railEl.setAttribute( "shader", "flat" );
		this.railEl.setAttribute( "ui-rounded", "borderRadius:0.025" );
		this.railEl.setAttribute( "color", this.data.railColor );
		this.railEl.setAttribute( "class", this.data.intersectableClass + " no-yoga-layout" );
		this.el.appendChild( this.railEl );
		// Wait for the rounded edge on the rail to load to clone the geometry for the
		// selected progress bar part of the rail
		this.railEl.addEventListener( "rounded-loaded", () => {

			this.getRailObject( this.railEl.object3D );
			this.setDisabled();
			this.click();

		} );
		this.clickHandler = e => {

			this.data.value = ! this.data.value;
			this.click();
			// Prevent default behaviour of event
			if ( e.detail.preventDefault ) {

				e.detail.preventDefault();

			}

		};
        if ( ! this.data.disabled ) {

		this.railEl.addEventListener( "mouseover", e => this.mouseEnter( e ) );
        this.railEl.addEventListener( "mouseout", e => this.mouseLeave( e ) );

		}

	},

    update() {

		if ( this.data.disabled ) {

			this.railEl.addEventListener( "mouseover", e => this.mouseEnter( e ) );		
			this.railEl.addEventListener( "mouseout", e => this.mouseLeave( e ) );

		} else {

			this.railEl.removeEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.railEl.removeEventListener( "mouseout", e => this.mouseLeave( e ) );

		}

	},
	mouseEnter(e) {

		if (this.data.courser2d) {
	
		   this.el.sceneEl.classList.remove("initial-cursor");	
		   this.el.sceneEl.classList.add("pointer-cursor");	
	
		}

	},
	mouseLeave() {
		
		if (this.data.courser2d) {

		   this.el.sceneEl.classList.remove("pointer-cursor");	
		  
		}
	   
	},
	setDisabled() {

		// Add / Remove click handlers based on disabled state.
		if ( this.data.disabled ) {

			this.handleEl.removeEventListener( "mousedown", this.clickHandler );
			this.handleEl.setAttribute( "color", this.data.handleDisabledColor );

		} else {

			this.handleEl.addEventListener( "mousedown", this.clickHandler );
			this.handleEl.setAttribute( "color", this.data.handleColor );

		}

	},
	click() {

		// Emit the current selected value
		this.el.emit( "ui-switch-changed", this.data.value );
		// Animate the switch handle and the progress bar.
		this.tweenHandle();
		this.tweenProgress();

	},
	getRailObject( object ) {

		// Get the rounded shape geomtery.
		object.traverse( child => {

			if ( child.geometry && child.geometry.type === "ShapeBufferGeometry" ) {

				this.progress = new THREE.Mesh( child.geometry.clone(), new THREE.MeshBasicMaterial( { color: this.data.progressColor } ) );
				this.progress.position.set( - 0.075, 0, 0.001 );
				this.progress.scale.set( 0.00001, 1, 1 );
				this.el.object3D.add( this.progress );

			}

		} );

	},
	tweenProgress() {

		if ( this.progress ) {

			new TWEEN.Tween( this.progress.position )
				.to( new THREE.Vector3( this.data.value ? 0 : - 0.075, 0, 0.001 ), this.data.switchDuration )
				.easing( TWEEN.Easing.Exponential.Out )
				.start();
			new TWEEN.Tween( this.progress.scale )
				.to( new THREE.Vector3( this.data.value ? 1 : 0.00001, 1, 1 ), this.data.switchDuration )
				.easing( TWEEN.Easing.Exponential.Out )
				.start();

		}

	},
	tweenHandle() {

		if ( this.handleEl ) {

			// Start changes
			UI.utils.isChanging( this.el.sceneEl, this.el.object3D.uuid );
			new TWEEN.Tween( this.handleEl.object3D.position )
				.to( new THREE.Vector3( this.data.value ? 0.05 : - 0.05, 0, this.data.handleZIndex ), this.data.switchDuration )
				.onComplete( () => {

					// Stop changes
					UI.utils.stoppedChanging( this.el.object3D.uuid );

				} )
				.easing( TWEEN.Easing.Exponential.Out )
				.start();

		}

	},
	remove() {
		this.el.removeObject3D('ui-switch');
	//	this.el.remove(this.handleEl)
       // this.el.remove(this.railEl)  
		//this.el.object3D.geometry.dispose();
	}
} );
