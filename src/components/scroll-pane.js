/* global AFRAME,THREE */
/**
 * Scroll Pane for aframe-material-collection. Expects
 * @namespace aframe-material-collection
 * @component ui-scroll-pane
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-scroll-pane", {
	schema: {
		height: { type: "number", default: 1.2 },
		width: { type: "number", default: 2.9 },
		scrollPadding: { type: "number", default: 0.05 },
		scrollZOffset: { type: "number", default: 0 },
		scrollHandleColor: { default: "#000000" },
		intersectableClass: { default: "intersectable" },
		cameraEl: { type: "selector" },
		lookControlsComponent: { default: "look-controls" }
	},
	init() {

		// Setup scroll bar and panel backing.
		this.setupElements();
		// Grab content container.
		this.container = this.el.querySelector( ".container" );
		if ( typeof this.container === "undefined" ) {

			throw 'ui-scroll-pane needs an entity inside it with the class "container" - <a-entity class="container"></a-entity>';

		}
		// Setup scroll bar.
		this.scrollBarWidth = this.rail.getAttribute( "width" );
		const position = this.container.getAttribute("position");
	//	this.container.setAttribute( "position", - this.data.width / 2 + " " + position.y +  " " + this.data.height / 2 + " " + position.z );
		this.rail.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " 1 " + ( this.data.scrollZOffset + 0.0002 ) );
		this.handle.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " 1 " + ( this.data.scrollZOffset + 0.0005 ) );
		this.el.sceneEl.renderer.localClippingEnabled = true;

		// Setup content clips.
		this.content_clips = [
			new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), this.data.height / 2 ),
			new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), this.data.height / 2 ),
			new THREE.Plane( new THREE.Vector3( - 1, 0, 0 ), this.data.width / 2 ),
			new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), this.data.width / 2 )
		];
		// Pause/play camera look controls
		const playPauseCamera = method => {

			if ( this.data.cameraEl ) {

				let lookControls = this.data.cameraEl.components[ this.data.lookControlsComponent ];
				if ( lookControls ) {

					lookControls[ method ]();

				}

			}

		};
		// Setup mouse move handler for scrolling and updating scroll handle.
		const mousemove = e => this.mouseMove( e );
		// Start scroll
		this.handle.addEventListener( "mousedown", e => {
			console.error("mousedown handle")
			// Pause look controls to allow scrolling
			playPauseCamera( "pause" );
			this.isDragging = true;
			// Store the start point offset
			this.handlePos = this.handle.object3D.worldToLocal( e.detail.intersection ? e.detail.intersection.point : e.relatedTarget.object3D.position ).y;
			this.backgroundPanel.addEventListener( "ui-mousemove", mousemove );
		
			// Start changes
			UI.utils.isChanging( this.el.sceneEl, this.handle.object3D.uuid );
			// Prevent default behaviour of event
			UI.utils.preventDefault( e );

		} );
		// End scroll
		const endScroll = e => {

			if ( this.isDragging ) {

				this.backgroundPanel.removeEventListener( "ui-mousemove", mousemove );
				// Play look controls once scrolling is finished
				playPauseCamera( "play" );
				this.isDragging = false;
				// Stop changes
				UI.utils.stoppedChanging( this.handle.object3D.uuid );
				// Prevent default behaviour of event
				UI.utils.preventDefault( e );

			}

		};
		this.backgroundPanel.addEventListener( "mouseup", endScroll );
		this.backgroundPanel.addEventListener( "mouseleave", endScroll );
		// // Handle clicks on rail to scroll
		this.rail.addEventListener( "mousedown", e => {
console.error("mousedown rail")
			UI.utils.isChanging( this.el.sceneEl, this.handle.object3D.uuid );
			// Pause look controls
			this.isDragging = true;
			// Reset handle pos to center of handle
			this.handlePos = 0;
			// Scroll immediately and register mouse move events.
			this.scroll( this.rail.object3D.worldToLocal( e.detail.intersection ? e.detail.intersection.point : e.relatedTarget.object3D.position ).y );
			//this.scoll(10)
			this.backgroundPanel.addEventListener( "ui-mousemove", mousemove );
			// Prevent default behaviour of event
			UI.utils.preventDefault( e );

		} );

		// Setup content clips after the scene is loaded to be able to access all entity materials

		// update content clips world positions from this current element.

		this.updateContent();
		this.el.emit( "scroll-pane-loaded" );
		this.setupMouseWheelScroll();

		// Expose methods to the element to update/set the content of the scroll pane.
		this.el.setContent = this.setContent.bind( this );
		this.el.updateContent = this.updateContent.bind( this );
		this.el.scroll = this.scroll.bind( this );

	},
	updateContentClips() {

		this.el.sceneEl.object3D.updateMatrixWorld();
		// update content clips world positions from this current element.
		this.content_clips[ 0 ].set( new THREE.Vector3( 0, 1, 0 ), this.data.height / 2 );
		this.content_clips[ 1 ].set( new THREE.Vector3( 0, - 1, 0 ), this.data.height / 2 );
		this.content_clips[ 2 ].set( new THREE.Vector3( - 1, 0, 0 ), this.data.width / 2 );
		this.content_clips[ 3 ].set( new THREE.Vector3( 1, 0, 0 ), this.data.width / 2 );
		//this.el.sceneEl.object3D.updateMatrixWorld();
		this.content_clips[ 0 ].applyMatrix4( this.el.object3D.matrixWorld );
		this.content_clips[ 1 ].applyMatrix4( this.el.object3D.matrixWorld );
		this.content_clips[ 2 ].applyMatrix4( this.el.object3D.matrixWorld );
		this.content_clips[ 3 ].applyMatrix4( this.el.object3D.matrixWorld );

	},
	setContent( body, noAutoReload ) {

		if ( this.container ) {

			// Remove all children in the container and all yoga nodes
			while ( this.container.firstChild ) {

				let child = this.container.firstChild;
				if ( this.container.yoga_node && child.yoga_node ) {

					this.container.yoga_node.removeChild( child.yoga_node );

				}
				if ( child.object3D ) {

					UI.utils.clearObject( child.object3D );

				}
				this.container.removeChild( child );
				this.container.firstChild = null;

			}
			// Set the content in the scroll pane.
			return new Promise( resolve => {

				let loadedWrapper = document.createElement( "a-entity" );
				loadedWrapper.setAttribute( "visible", false );
				loadedWrapper.insertAdjacentHTML( "afterbegin", body );
				loadedWrapper.addEventListener( "loaded", e => {

					// Trigger an update to redraw scrollbars and fire change events.
					if ( ! noAutoReload ) this.updateContent();
					resolve( loadedWrapper );
					loadedWrapper.setAttribute( "visible", true );

				} );
				this.container.appendChild( loadedWrapper );

			} );

		}

	},
	updateContent( should_not_scroll ) {

		this.updateContentClips();
		this.currentUuid = THREE.Math.generateUUID();
		UI.utils.isChanging( this.el.sceneEl, this.currentUuid );
		//this.setChildClips();
		//if ( typeof Yoga !== "undefined" ) this.initialiseYoga( this.container, this.data.width * 100 );
		//this.container.yoga_node.calculateLayout( this.data.width * 100, "auto", Yoga.DIRECTION_LTR );
		this.content_height = 10; //Number.NEGATIVE_INFINITY;
		//if ( typeof Yoga !== "undefined" ) this.updateYoga( this.container );

		this.handleSize = THREE.Math.clamp( this.data.height / this.content_height, 0.1, 1 );
		this.handle.setAttribute( "width", this.handleSize === 1 ? 0.00000001 : 0.1 );
		this.rail.setAttribute( "width", this.handleSize === 1 ? 0.00000001 : 0.1 );
		this.rail.setAttribute( "color", this.handleSize === 1 ? "#efefef" : "#fff" );
		this.handle.setAttribute( "height", this.data.height * this.handleSize );
		/*if ( ! should_not_scroll ) {

			this.container.object3D.position.y = this.data.height / 2;
			this.handle.setAttribute(
				"position",
				this.data.width / 2 +
          this.data.scrollPadding +
          " " +
          ( this.data.height - this.data.height * this.handleSize ) / 2 +
          " " +
          ( this.data.scrollZOffset + 0.0005 )
			);

		}*/

	},
	mouseMove( e ) {
console.error("mouseMove")
		if ( this.isDragging ) {

			let pos = this.rail.object3D.worldToLocal( e.detail.intersection.point );
			this.scroll( pos.y - this.handlePos );

		}

	},




	scroll( positionY ) {
console.error(positionY)
		let min = - this.data.height / 2 + ( this.data.height * this.handleSize ) / 2;
		let max = this.data.height / 2 - ( this.data.height * this.handleSize ) / 2;
		// Set scroll position with start point offset.
		let scroll_pos = THREE.Math.clamp( positionY, min, max );
		let scroll_perc = this.handleSize === 1 ? 0 : 1 - ( scroll_pos - min ) / ( max - min );
		console.error(( this.content_height - this.data.height ) * scroll_perc + this.data.height / 2)
		this.container.object3D.position.y = ( this.content_height - this.data.height ) * scroll_perc + this.data.height / 2;
		this.handle.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " " + scroll_pos + " " + ( this.data.scrollZOffset + 0.0005 ) );

	},
	setupMouseWheelScroll() {

		this.backgroundPanel.addEventListener( "ui-mousewheel", e => {

			if ( this.handleSize !== 1 ) {

				// Start changes
				UI.utils.isChanging( this.el.sceneEl, this.el.object3D.uuid );
				this.scroll( this.handle.getAttribute( "position" ).y + ( e.detail.evt.deltaY < 0 ? 0.1 : - 0.1 ) );
				// Stop changes
				UI.utils.stoppedChanging( this.el.object3D.uuid );
				UI.utils.preventDefault( e );

			}

		} );

	},
	setupElements() {

		// Setup background with mouse input to catch mouse move events when not exactly over the scroll bar.
		this.backgroundPanel = document.createElement( "a-plane" );
		this.backgroundPanel.setAttribute( "class", "ui background " + this.data.intersectableClass );
		this.backgroundPanel.setAttribute( "width", this.data.width + 1 );
		this.backgroundPanel.setAttribute( "height", this.data.height + 1 );
		this.backgroundPanel.setAttribute( "position", "0 1 -0.013" );
		this.backgroundPanel.setAttribute( "opacity", 0.000001 ); //
		//this.backgroundPanel.setAttribute( "transparent", true );

		this.el.appendChild( this.backgroundPanel );

		// Add scroll bar rail.
		this.rail = document.createElement( "a-plane" );
		//this.rail.setAttribute( "class", "rail " + this.data.intersectableClass );
		this.rail.setAttribute( "width", 0.1 );
		this.rail.setAttribute( "height", this.data.height );
		this.rail.setAttribute( "shader", "flat" );
		this.rail.setAttribute( "class", "ui" );
		this.el.appendChild( this.rail );

		// Add scroll bar handle.
		this.handle = document.createElement( "a-plane" );
		//this.handle.setAttribute( "class", "ui handle " + this.data.intersectableClass );
		this.handle.setAttribute( "width", 0.1 );
		this.handle.setAttribute( "height", this.data.height );
		this.handle.setAttribute( "color", this.data.scrollHandleColor );
		this.handle.setAttribute( "shader", "flat" );
		this.handle.setAttribute( "class", "ui" );
		this.el.appendChild( this.handle );

	},


	setChildClips( parent ) {

		// Traverse the entity tree inside the content container and add content clips to each material found.
		parent = parent || this.container;
		for ( let i = 0; i < parent.childNodes.length; i ++ ) {

			let child = parent.childNodes[ i ];
			//if (child.nodeType === 1) {
			child._content_clips = this.content_clips;
			let traverse = () => {

				if ( child.object3D ) {

					child.object3D.traverse( object => {

						if ( object.material ) {

							// Add shader chunks to be able to clip shader materials - needed for <a-text> entities.
							if ( object.material.isRawShaderMaterial ) {

								object.material.onBeforeCompile = function ( shader ) {

									let vertexParts = shader.vertexShader.split( "\n" );
									let vertexMainIndex = vertexParts.indexOf( "void main(void) {" );
									vertexParts.splice( vertexMainIndex, 0, "#include <clipping_planes_pars_vertex>" );
									vertexParts.splice( vertexMainIndex + 2, 0, "#include <begin_vertex>" );
									vertexParts.splice( vertexParts.length - 2, 0, "#include <project_vertex>" );
									vertexParts.splice( vertexParts.length - 2, 0, "#include <clipping_planes_vertex>" );
									shader.vertexShader = vertexParts.join( "\n" );
									let fragmentParts = shader.fragmentShader.split( "\n" );
									let fragmentMainIndex = fragmentParts.indexOf( "void main() {" );
									fragmentParts.splice( fragmentMainIndex, 0, "#include <clipping_planes_pars_fragment>" );
									fragmentParts.splice( fragmentMainIndex + 2, 0, "#include <clipping_planes_fragment>" );
									shader.fragmentShader = fragmentParts.join( "\n" );

								};
								object.material.clipping = true;

							}
							// Set the content clipping planes.
							object.material.clippingPlanes = this.content_clips;
							object.material.clipShadows = true;
							object.material.needsUpdate = true;

						}

					} );

				}

			};
			// Wait for next tick - exokit required this.
			setTimeout( () => {

				if ( child.getAttribute ) {

					let text = child.getAttribute( "text" );

					if ( text ) {

						// Wait for the font to load first.
						child.addEventListener( "textfontset", () => {

							clearTimeout( this.fontRenderTimeout );
							this.fontRenderTimeout = setTimeout( () => UI.utils.stoppedChanging( this.currentUuid ), 500 );
							traverse();

						} );

					} else {

						traverse();

					}

				}

			}, 0 );
			// }
			// Recurse
			this.setChildClips( child );

		}

	}
} );
