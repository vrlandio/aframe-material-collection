/* global AFRAME,TWEEN */
/**
 * Radio Component for aframe-material-collection. Resets other radio buttons siblings and includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-radio
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-radio", {
	schema: {
		value: { default: "" },
		selected: { type: "boolean", default: false },
		selectedColor: { default: "#606572" },
		selectedRadius: { type: "number", default: 0.045 },
		unselectedColor: { default: "#5f5f5f" },
		disabledColor: { default: "#afafaf" },
		disabled: { type: "boolean", default: false },
		intersectableClass: { default: "intersectable" },
		width: { type: "number", default: 0.15 },
		height: { type: "number", default: 0.15 }
	},
	init() {

		this.width = 0.15;
		this.height = 0.15;
		// Create center circle for checked state.
		this.filled_circle = document.createElement( "a-circle" );
		this.filled_circle.setAttribute( "radius", this.data.selectedRadius );
		this.filled_circle.setAttribute( "scale", "0 0 0" );
		this.filled_circle.setAttribute( "color", this.data.disabled ? this.data.disabledColor : this.data.selectedColor );
		this.filled_circle.setAttribute( "shader", "flat" );
		this.filled_circle.setAttribute( "class", this.data.intersectableClass + "no-yoga-layout" );
		this.filled_circle.setAttribute( "segments", 6 );
		this.el.components.material.material.color = new THREE.Color( this.data.disabled ? this.data.disabledColor : this.data.unselectedColor );
		this.el.appendChild( this.filled_circle );
		// Create backing for getting click events.
		this.backing = document.createElement( "a-circle" );
		this.backing.setAttribute( "radius", this.data.selectedRadius );
		this.backing.setAttribute( "position", "0 0 -0.001" );
		this.backing.setAttribute( "class", this.data.intersectableClass + " no-yoga-layout" );
		this.backing.setAttribute( "shader", "flat" );
		this.backing.setAttribute( "segments", 6 );
		// this.backing.setAttribute("opacity", 0.0001);
		// this.backing.setAttribute("transparent", true);

		this.el.appendChild( this.backing );

		// Set this if it is checked.
		if ( this.data.selected ) {

			this.click();

		}

		this.clickHandler = e => {

			this.click( e );
			// Prevent default behaviour of event
			if ( e.detail.preventDefault ) {

				e.detail.preventDefault();

			}

		};

	},
	play() {

		// Add / Remove click handlers based on disabled state.
		if ( this.data.disabled ) {

			this.backing.removeEventListener( "mousedown", this.clickHandler );
			this.filled_circle.removeEventListener( "mousedown", this.clickHandler );

		} else {

			this.backing.addEventListener( "mousedown", this.clickHandler );
			this.filled_circle.addEventListener( "mousedown", this.clickHandler );

		}

	},
	pause() {

		if ( ! this.data.disabled ) {

			this.backing.removeEventListener( "mousedown", this.clickHandler );
			this.filled_circle.removeEventListener( "mousedown", this.clickHandler );

		}

	},
	deselect() {

		// Deselect this radio with a scale animation on the circle.
		this.el.setAttribute( "selected", false );
		let _this = this;
		// Start changes
		UI.utils.isChanging( this.el.sceneEl, this.filled_circle.object3D.uuid );
		new TWEEN.Tween( { x: 1 } )
			.to( { x: 0.000001 }, 200 )
			.onUpdate( function () {

				_this.filled_circle.object3D.scale.set( this.x, this.x, this.x );

			} )
			.onComplete( () => {

				// Stop changes
				UI.utils.stoppedChanging( _this.filled_circle.object3D.uuid );
				this.isRippling = false;

			} )
			.easing( TWEEN.Easing.Exponential.Out )
			.start();

	},
	click() {

		// Get all other radio siblings and reset their state if they are selected.
		[].slice
			.call( this.el.parentNode.querySelectorAll( "a-ring,a-ui-radio" ) )
			.filter( el => el !== this.el )
			.forEach( ring => {

				if ( ring.components[ "ui-radio" ] && ring.getAttribute( "selected" ) === "true" ) {

					ring.components[ "ui-radio" ].deselect();

				}

			} );
		// Emit the current selected value
		this.el.emit( "ui-radio-changed", this.data.value );
		// Set this radio's selected state.
		this.el.setAttribute( "selected", true );
		// Throttle animations.
		if ( this.isSelecting ) return;
		this.isSelecting = true;
		let _this = this;
		// Start changes
		UI.utils.isChanging( this.el.sceneEl, this.filled_circle.object3D.uuid );
		new TWEEN.Tween( { x: 0.000001 } )
			.to( { x: 1 }, 250 )
			.onUpdate( function () {

				_this.filled_circle.object3D.scale.set( this.x, this.x, this.x );

			} )
			.onComplete( () => {

				// Stop changes
				UI.utils.stoppedChanging( this.filled_circle.object3D.uuid );
				this.isSelecting = false;

			} )
			.easing( TWEEN.Easing.Exponential.Out )
			.start();

	},
	remove() {
		this.el.removeObject3D("ui-radio")
		this.el.remove(this.backing)
		this.el.remove(this.filled_circle )
	
	}
} );
