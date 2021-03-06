/* global AFRAME,THREE */
/**
 * Scroll Pane for aframe-material-collection. Expects
 * @namespace aframe-material-collection
 * @component ui-scroll-pane
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-scroll-pane-container", {
	schema: {
		height: { type: "number", default: 1.2 },
		width: { type: "number", default: 2.9 },
		scrollPadding: { type: "number", default: 0.05 },
		scrollZOffset: { type: "number", default: 0 },
		scrollHandleColor: { default: "#000000" },
		intersectableClass: { default: "intersectable" },
		cameraEl: { type: "selector" },
		lookControlsComponent: { default: "look-controls" },
	},
	init() {

		this.handlePos = 0;
		// Setup scroll bar and panel backing.
		this.setupElements();
		// Grab content container.
		this.container = this.el.querySelector( ".container" );
		if ( typeof this.container === "undefined" ) {

			throw 'ui-scroll-pane needs an entity inside it with the class "container" - <a-entity class="container"></a-entity>';

		}

		// Setup scroll bar.
		//	this.scrollBarWidth = this.rail.getAttribute( "width" );
		const position = this.container.getAttribute( "position" );
		//this.container.setAttribute( "position", - this.data.width / 2 + " " + position.y +  " " + this.data.height / 2 + " " + position.z );

		//this.rail.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " 1 " + ( this.data.scrollZOffset + 0.0002 ) );
		//	this.handle.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " 1 " + ( this.data.scrollZOffset + 0.0005 ) );

		//this.backgroundPanel.addEventListener( "ui-mousemove", mouseMove );
		// End scroll
		const endScroll = e => {

			console.error( "endscroll" );

			if ( this.isDragging ) {

				// Play look controls once scrolling is finished
				//playPauseCamera( "play" );
				this.isDragging = false;
				this.handlePos = 0;
				// Stop changes
				//UI.utils.stoppedChanging( this.backgroundPanel.object3D.uuid );
				// Prevent default behaviour of event
				const cursorcontroller = document.querySelector( "#cursor-controller" );
				cursorcontroller.removeAttribute( "ui-mouse-shim-vrland" );
				this.handle.removeEventListener( "mousemove", mouseMove );
				

			}
			e.preventDefault();

		};

		const mouseMove = ( e ) => {

			console.error( "mouseMOve" );
			/*	if(this.isDragging){
				let pos = this.rail.object3D.worldToLocal(e.detail.intersection.point);
				this.scroll(pos.y-this.handlePos);
			}
*/
			   if ( this.isDragging ) {

				if ( this.handlePos === 0 || this.startScroll ) {

					this.handlePos = e.detail.intersection.point;
						this.el.sceneEl.emit( "stateadded", { detail: "scroll" } );
						console.error( "stateadded scroll" );
					this.startScroll = false;
				}

				   const pos = this.rail.object3D.worldToLocal( e.detail.intersection.point );
				   const posInter = e.detail.intersection.point;

				   this.scroll( pos.y - this.handlePos.y - this.data.height*0.1/2 );

			}

		   };

	   	const mouseOver = ( e ) => {

		   };

		const startScroll = ( e ) => {

			console.error( "startScroll" );
			this.el.sceneEl.emit( "stateremoved", { detail: "noscroll" } );
			this.isDragging = true;
			//this.handlePos =  this.handle.object3D.position.y
			// Reset handle pos to center of handle
			 // this.backgroundPanel.object3D.position.y;
			 this.startScroll = true;
			console.error( this.backgroundPanel.object3D.position.y );
			// Scroll immediately and register mouse move events.
			const cursorcontroller = document.querySelector( "#cursor-controller" );
			cursorcontroller.setAttribute( "ui-mouse-shim-vrland", "fps:15;" );
			this.handle.addEventListener( "ui-mousemove", mouseMove );
			//this.scroll( this.handle.object3D.worldToLocal( e.detail.intersection ? e.detail.intersection.point : e.relatedTarget.object3D.position ).y );
			//this.scoll(10)

			e.preventDefault();

		};

		/*	this.backgroundPanel.addEventListener( "mouseup", endScroll );
		this.backgroundPanel.addEventListener( "mouseleave", endScroll );
		this.backgroundPanel.addEventListener( "mouseover", mouseOver );
		this.backgroundPanel.addEventListener( "ui-mousemove", mouseMove );
		this.backgroundPanel.addEventListener( "mousedown", startScroll );

		// // Handle clicks on rail to scroll
		this.backgroundPanel.addEventListener( "nomousedown", e => {

			console.error( "touchstart" );
			UI.utils.isChanging( this.el.sceneEl, this.handle.object3D.uuid );
			// Pause look controls
			this.isDragging = true;
			// Reset handle pos to center of handle
			this.handlePos = 0;
			// Scroll immediately and register mouse move events.

			this.scroll( this.backgroundPanel.object3D.worldToLocal( e.detail.intersection ? e.detail.intersection.point : e.relatedTarget.object3D.position ).y );
			//this.scoll(10)

			// Prevent default behaviour of event
		e.preventDefault();

		} );
*/
		this.handle.addEventListener( "mousedown", startScroll );
		this.rail.addEventListener( "mouseout", endScroll );
		this.handle.addEventListener( "mouseup", endScroll );
		this.rail.addEventListener( "mouseup", endScroll );
		//this.rail.addEventListener( "ui-mousemove", mouseMove );

		//this.handle.addEventListener( "mouseout", endScroll );
		// Setup content clips after the scene is loaded to be able to access all entity materials

		// update content clips world positions from this current element.

		//	this.updateContent();
		//	this.el.emit( "scroll-pane-loaded" );
		//	this.setupMouseWheelScroll();

		// Expose methods to the element to update/set the content of the scroll pane.
		//	this.el.setContent = this.setContent.bind( this );
		//	this.el.updateContent = this.updateContent.bind( this );
		this.el.scroll = this.scroll.bind( this );

		this.handleSize = 0.1; //THREE.Math.clamp((this.data.height/2),0.1,1);
		this.handle.setAttribute( 'width', this.handleSize === 1 ? 0.00000001 : 0.1 );
		this.rail.setAttribute( 'width', this.handleSize === 1 ? 0.00000001 : 0.1 );
		this.rail.setAttribute( 'color', this.handleSize === 1 ? '#efefef' : '#fff' );
		this.handle.setAttribute( 'height', this.data.height * this.handleSize );



		this.el.sceneEl.renderer.localClippingEnabled = true;

        // Setup content clips.
        this.content_clips = [
            new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), (this.data.height/2) ),
            new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), (this.data.height/2) ),
            new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), (this.data.width/2) ),
            new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), (this.data.width/2) )
        ];


	},

	scroll( positionY ) {

		const min = - this.data.height / 2 + ( this.data.height * this.handleSize ) / 2;
		const max = this.data.height / 2 - ( this.data.height * this.handleSize ) / 2;
		// Set scroll position with start point offset.
		const scroll_pos = THREE.Math.clamp( positionY, min, max );
		const scroll_perc = this.handleSize === 1 ? 0 : 1 - ( scroll_pos - min ) / ( max - min );

		this.container.object3D.position.y = positionY; // ( this.content_height - this.data.height ) * scroll_perc + this.data.height / 2;
		this.handle.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " " + scroll_pos + " " + ( this.data.scrollZOffset + 0.0005 ) );

	},

	setupElements() {

		// Setup background with mouse input to catch mouse move events when not exactly over the scroll bar.
		this.backgroundPanel = document.createElement( "a-plane" );
		//this.backgroundPanel.setAttribute( "class", "ui background " + this.data.intersectableClass );
		this.backgroundPanel.setAttribute( "width", this.data.width );
		this.backgroundPanel.setAttribute( "height", this.data.height );
		this.backgroundPanel.setAttribute( "position", "0 0 0" );
		this.backgroundPanel.setAttribute( "class", "ui" );
		this.backgroundPanel.setAttribute( "visible", "true" );
		///this.backgroundPanel.setAttribute( "opacity", 0.1 ); //
		//	this.backgroundPanel.setAttribute( "transparent", false );

		this.el.appendChild( this.backgroundPanel );

		// Add scroll bar rail.
		this.rail = document.createElement( "a-plane" );
		//this.rail.setAttribute( "class", "rail " + this.data.intersectableClass );
		this.rail.setAttribute( "width", 0.1 );
		this.rail.setAttribute( "height", this.data.height );
		this.rail.setAttribute( "shader", "flat" );
		this.rail.setAttribute( "class", "ui" );
		this.rail.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " 0 0" );
		this.el.appendChild( this.rail );

		// Add scroll bar handle.
		this.handle = document.createElement( "a-plane" );
		this.handle.setAttribute( "class", "ui handle " + this.data.intersectableClass );
		this.handle.setAttribute( "width", 0.1 );
		this.handle.setAttribute( "height", this.data.height );
		this.handle.setAttribute( "color", this.data.scrollHandleColor );
		this.handle.setAttribute( "shader", "flat" );
		//this.handle.setAttribute( "class", "ui" );
		this.handle.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " 0 0.002" );
		this.el.appendChild( this.handle );

	},

} );
