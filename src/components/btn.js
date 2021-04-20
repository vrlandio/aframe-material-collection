/* global AFRAME,TWEEN */
/**
 * Button base Component for aframe-material-collection. This is used as the base component for all the button primitives.
 * @namespace aframe-material-collection
 * @component ui-btn
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-btn", {
	schema: {
		duration: { type: "int", default: 0 },
		hoverHeight: { type: "number", default: 0.001 },
		activeHeight: { type: "number", default: - 0.001 },
		disabled: { type: "boolean", default: false },
		animated: { type: "boolean", default: true },
		courser2d: { type: "boolean", default: false },
	    tooltip: { type: "boolean", default: false },
		tooltiptext: { type: "string", default: "tooltip" },
		tooltipwidth: { type: "number", default: 0.1 }	},
	updateSchema() {
		// TODO: handle updates to the button state, disabled flag here.
	},
	init() {

		// Store the current button z value for animating mouse events
		this.defaultZ = this.el.object3D.position.z;

		// register input events for interaction
		if ( ! this.data.disabled ) {

			this.el.addEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.el.addEventListener( "mousedown", e => this.mouseDown( e ) );
			this.el.addEventListener( "mouseup", e => this.mouseUp( e ) );
			this.el.addEventListener( "mouseout", e => this.mouseLeave( e ) );

		}

	},
	update() {

		if ( ! this.data.disabled ) {

			/*this.el.removeEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.el.removeEventListener( "mousedown", e => this.mouseDown( e ) );
			this.el.removeEventListener( "mouseup", e => this.mouseUp( e ) );
			this.el.removeEventListener( "mouseout", e => this.mouseLeave( e ) );

			this.el.addEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.el.addEventListener( "mousedown", e => this.mouseDown( e ) );
			this.el.addEventListener( "mouseup", e => this.mouseUp( e ) );
			this.el.addEventListener( "mouseout", e => this.mouseLeave( e ) );
         */
		} else {

			this.el.removeEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.el.removeEventListener( "mousedown", e => this.mouseDown( e ) );
			this.el.removeEventListener( "mouseup", e => this.mouseUp( e ) );
			this.el.removeEventListener( "mouseout", e => this.mouseLeave( e ) );

		}

	},
	mouseEnter( e ) {

		if ( this.data.animated ) {

		    if ( this.data.courser2d ) {

 			this.el.sceneEl.classList.remove( "grab-cursor" );
				this.el.sceneEl.classList.add( "pointer-cursor" );

			}

			const _this = this;
			// Lift the button up for hover animation
			this.tween(
				this.defaultZ,
				this.defaultZ + this.data.hoverHeight,
				function () {

					_this.el.object3D.position.z = this.x;

				},
				function () {

					_this.el.object3D.position.z = _this.defaultZ + _this.data.hoverHeight;

				},
			);

		}

		if ( this.data.tooltip ) {

			this.tooltipElement = document.createElement( "a-entity" );
			this.tooltipElement.setAttribute( "box-rounded-text", {
				width: this.data.tooltipwidth,
				height: 0.015,
				depth: 0.001,
				color: 0xfffff0,
				curveSegments: 13,
				borderRadius: 0.005,
				material: "phong",
				zOffset: 0,
				xOffset: 0,
				yOffset: 0.03,
				envMapIntensity: 1.0,
				text: this.data.tooltiptext,

			 } );

			this.el.appendChild( this.tooltipElement );

		}
		//UI.utils.preventDefault(e)

	},
	mouseLeave( e ) {
		if ( this.data.tooltip ) {

			this.el.remove( this.tooltipElement );
			this.el.removeAttribute( "box-rounded-text" );

		}

		// Ignore mouse leave event if the button was clicked - mouse up already resets to default state.
		if ( this.is_clicked ) {

			return ( this.is_clicked = false );

		}

		// Reset button state from hover
		if ( this.data.animated ) {

			this.resetAnimation( this.defaultZ + this.data.hoverHeight );
			if ( this.data.courser2d ) {

			  this.el.sceneEl.classList.remove( "pointer-cursor" );
			  this.el.sceneEl.classList.add( "grab-cursor" );

			}

		}

	
		//UI.utils.preventDefault(e)
		console.error( "mouseLeave Button" );

	},
	mouseUp( e ) {

		this.is_clicked = true;
		// Reset button state from pressed
		if ( this.data.animated ) this.resetAnimation( this.defaultZ + this.data.activeHeight );
		UI.utils.preventDefault( e );

	},
	mouseDown( e ) {

		const _this = this;

		// Press state animation from hovered
		/*  this.tween(
      this.defaultZ + this.data.hoverHeight,
      this.defaultZ + this.data.activeHeight,
      function() {
        _this.el.object3D.position.z = this.x;
      },
      function() {
        _this.el.object3D.position.z = _this.defaultZ + _this.data.activeHeight;
      }
    );
  */
		UI.utils.preventDefault( e );

	},
	resetAnimation( start_z ) {

		const _this = this;
		this.tween(
			start_z,
			this.defaultZ,
			function () {

				_this.el.object3D.position.z = this.x;

			},
			function () {

				_this.el.object3D.position.z = _this.defaultZ;

			},
		);

	},
	tween( from, to, callback, complete ) {

		const _this = this;
		// Start changes
		UI.utils.isChanging( this.el.sceneEl, this.el.object3D.uuid );
		return new TWEEN.Tween( { x: from } )
			.to( { x: to }, this.data.duration )
			.onUpdate( callback )
			.onComplete( function () {

				// Stop changes
				UI.utils.stoppedChanging( _this.el.object3D.uuid );
				return complete.call( this );

			} )
			.easing( TWEEN.Easing.Exponential.Out )
			.start();

	},
} );
