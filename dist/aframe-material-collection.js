/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Button Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-button
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive(
	"a-ui-button",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
		
			"box-rounded": {width: 0.03,
				height: 0.01,
				depth: 0.01,
				color: "#000111",
				curveSegments: 13,
				borderRadius: 0.01,
				material: "standard"
			},
			
			"ui-btn": {
				animated: "ui-btn.animated",
			},

			"troika-text": {
				align: "center",
				depthOffset: -6000,
				wrapCount: 10,
				fontSize: 0.015
			},
		
			
		},
		mappings: {
			height: "box-rounded.height",
			width: "box-rounded.width",
			depth: "box-rounded.depth",
			color: "box-rounded.color",
			transparent: "box-rounded.transparent",
			
            "text-value": "troika-text.value",
		
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
			disabled: "ui-btn.disabled",
			"hover-height": "ui-btn.hoverHeight",
			"active-height": "ui-btn.activeHeight"
		}
	} )
);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Floating Action Button Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-fab-button
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive(
	"a-ui-fab-button",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			geometry: {
				primitive: "circle",
				radius: 0.1,
				segments: 6
			},
			
			material: {
				color: "#009688",
				shader: "flat",
				transparent: "false"
			},
			//"ui-btn": {},
			//  "ui-ripple": { size: { x: 0.1, y: 0.1 }, zIndex: 0.002, fadeDelay: 300, duration: 500 },
			//"ui-icon": { size: { x: 0.105, y: 0.105 } }
		},
		mappings: {
			radius: "geometry.radius",
			color: "material.color",
			//"icon-color": "ui-icon.color",
			transparent: "material.transparent",
			src: "ui-icon.src",
			// "ripple-color": "ui-ripple.color",
			// "ripple-size": "ui-ripple.size",
			// "ripple-z-index": "ui-ripple.zIndex",
			disabled: "ui-btn.disabled",
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
		}
	} )
);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Floating Action Button Small Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-fab-button-small
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive(
	"a-ui-fab-button-small",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			geometry: {
				primitive: "circle",
				radius: 0.055,
				segments: 6
			},
			material: {
				color: "#009688",
				shader: "flat"
			},
			"ui-btn": {},
			// "ui-ripple": { size: { x: 0.125, y: 0.125 }, zIndex: -0.001, color: "#ff0000" },
			//"ui-icon": { size: { x: 0.075, y: 0.075 }, src: "icons/sort_white_64dp.png" }
		},
		mappings: {
			radius: "geometry.radius",
			color: "material.color",
			"icon-color": "ui-icon.color",
			transparent: "material.transparent",
			src: "ui-icon.src",
			//  "ripple-color": "ui-ripple.color",
			//  "ripple-size": "ui-ripple.size",
			//"ripple-z-index": "ui-ripple.zIndex",
			disabled: "ui-btn.disabled",
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
		}
	} )
);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Floating Action Button Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-fab-button
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive(
	"a-ui-round-button",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			
			"box-rounded": {zOffset: -0.025,depth: 0.025,width: 0.2,height:0.075,opacity:0.8,borderRadius: 0.02,curveSegments:16, color: "#232328"},
			"troika-text": {
			
				zOffset: -0.025,
				//wrapCount: 10,
				fontSize: 0.1,
				depthOffset: -0.1,
				"depth-offset": -0.1,
				align: "center",
				color: "#000000",
				font: "/assets/fonts/FiraMono-Regular.ttf"
			}
		},
		mappings: {
			height: "box-rounded.height",
			width: "box-rounded.width",
			color: "box-rounded.color",
		
			"font-color": "troika-text.color",
        	"text-value": "troika-text.value",
			"wrap-count": "troika-text.wrapCount",
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
			disabled: "ui-btn.disabled",
			"hover-height": "ui-btn.hoverHeight",
			"active-height": "ui-btn.activeHeight"
		
		}
	} )
);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Switch Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-switch
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive(
	"a-ui-switch",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			"ui-switch": {}
		},
		mappings: {
			value: "ui-switch.value",
			disabled: "ui-switch.disabled",
			courser2d: "ui-switch.courser2d",
		}
	} )
);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Slider Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-slider
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive(
	"a-ui-slider",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			"ui-slider": {}
		},
		mappings: {
			value: "ui-slider.value",
			disabled: "ui-slider.disabled",
			"camera-el": "ui-slider.cameraEl"
		}
	} )
);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Checkbox Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-checkbox
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive(
	"a-ui-checkbox",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			"ui-checkbox": {},
			"ui-ripple": {
				size: { x: 0.1, y: 0.1 },
				zIndex: - 0.001,
				color: "#afafaf"
			}
		},
		mappings: {
			value: "ui-checkbox.value",
			disabled: "ui-checkbox.disabled",
			indeterminate: "ui-checkbox.indeterminate"
		}
	} )
);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Radio Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-radio
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive(
	"a-ui-radio",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			"ui-radio": {},
			geometry: {
				primitive: "ring",
				radiusInner: 0.0575,
				radiusOuter: 0.0675,
				segmentsTheta: 6
			},
			material: {
				shader: "flat",
				color: "#afafaf"
			},
			
		},
		mappings: {
			color: "ui-radio.selectedColor",
			value: "ui-radio.value",
			selected: "ui-radio.selected",
			disabled: "ui-radio.disabled"
		}
	} )
);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Text Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-input-text
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive(
	"a-ui-input-text",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			"ui-input-text": {
				placeHolder: "Text...",
				width: 1,
				height: 0.2,
				value: ""
			},
			"ui-double-click": {}
		},
		mappings: {
			width: "ui-input-text.width",
			height: "ui-input-text.height",
			type: "ui-input-text.type",
			value: "ui-input-text.value",
			"background-color": "ui-input-text.backgroundColor",
			"place-holder": "ui-input-text.placeHolder",
			"camera-el": "ui-input-text.cameraEl",
			"rig-el": "ui-input-text.rigEl",
			"look-controls-component": "ui-input-text.lookControlsComponent",
			"wasd-controls-component": "ui-input-text.wasdControlsComponent"
		}
	} )
);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

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
		courser2d : { type: "boolean", default: false }
	},
	updateSchema() {
		// TODO: handle updates to the button state, disabled flag here.
	},
	init() {

		// Store the current button z value for animating mouse events
		this.defaultZ = this.el.object3D.position.z;
		this.el.setAttribute( "class", "ui" );
		// register input events for interaction
		if ( ! this.data.disabled ) {

			this.el.addEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.el.addEventListener( "mousedown", e => this.mouseDown( e ) );
			this.el.addEventListener( "mouseup", e => this.mouseUp( e ) );
			this.el.addEventListener( "mouseout", e => this.mouseLeave( e ) );

		}

	},
	update() {

		if ( !this.data.disabled ) {

			this.el.addEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.el.addEventListener( "mousedown", e => this.mouseDown( e ) );
			this.el.addEventListener( "mouseup", e => this.mouseUp( e ) );
			this.el.addEventListener( "mouseout", e => this.mouseLeave( e ) );

		} else {

			this.el.removeEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.el.removeEventListener( "mousedown", e => this.mouseDown( e ) );
			this.el.removeEventListener( "mouseup", e => this.mouseUp( e ) );
			this.el.removeEventListener( "mouseout", e => this.mouseLeave( e ) );

		}

	},
	mouseEnter( e ) {

		if ( this.data.animated ) {
		    if (this.data.courser2d) {
 			this.el.sceneEl.classList.remove("grab-cursor");	
            this.el.sceneEl.classList.add("pointer-cursor");	
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

				}
			);

		}
		//UI.utils.preventDefault(e)

	},
	mouseLeave( e ) {

		// Ignore mouse leave event if the button was clicked - mouse up already resets to default state.
		if ( this.is_clicked ) {

			return ( this.is_clicked = false );

		}
		// Reset button state from hover
		if ( this.data.animated ) {
			this.resetAnimation( this.defaultZ + this.data.hoverHeight );
			if (this.data.courser2d) {
			  this.el.sceneEl.classList.remove("pointer-cursor");	
			  this.el.sceneEl.classList.add("grab-cursor");	
			}
		}
		//UI.utils.preventDefault(e)

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

		let _this = this;
		this.tween(
			start_z,
			this.defaultZ,
			function () {

				_this.el.object3D.position.z = this.x;

			},
			function () {

				_this.el.object3D.position.z = _this.defaultZ;

			}
		);

	},
	tween( from, to, callback, complete ) {

		let _this = this;
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

	}
} );


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Slider Component for aframe-material-collection. Includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-slider
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-slider", {
	schema: {
		value: { type: "number", default: 0 },
		disabled: { type: "boolean", default: false },
		progressColor: { default: "#4db6ac" },
		handleColor: { default: "#606572" },
		handleDisabledColor: { default: "#afafaf" },
		railColor: { default: "#fff" },
		handleZIndex: { type: "number", default: 0.001 },
		intersectableClass: { default: "intersectable" },
		width: { type: "number", default: 0.5 },
		height: { type: "number", default: 0.1 },
		lookControlsComponent: { default: "look-controls" },
		handleRadius: { type: "number", default: 0.055 },
		scrollZOffset: { type: "number", default: 0 },
		cameraEl: { type: "selector" }
	},
	getValue() {

		return this.scroll_perc;

	},
	init() {

		this.scroll_perc = this.data.value;
		this.width = this.data.width;
		this.height = this.data.height;
		// Setup background with mouse input to catch mouse move events when not exactly over the scroll bar.
		this.backgroundPanel = document.createElement( "a-plane" );
		this.backgroundPanel.setAttribute( "class", "no-yoga-layout background " + this.data.intersectableClass );
		this.backgroundPanel.setAttribute( "width", this.data.width + 0.01 );
		this.backgroundPanel.setAttribute( "height", this.data.height + 0.01 );
		this.backgroundPanel.setAttribute( "position", "0 0 -0.02" );
		//this.backgroundPanel.setAttribute("opacity", 0.0001); //
		this.backgroundPanel.setAttribute( "transparent", false );
		this.backgroundPanel.setAttribute( "visible", false );
		this.el.appendChild( this.backgroundPanel );
		// Setup handle circle entity.
		this.handleEl = document.createElement( "a-circle" );
		this.handleEl.setAttribute( "radius", this.data.handleRadius );
		this.handleEl.setAttribute( "color", this.data.handleColor );
		this.handleEl.setAttribute( "shader", "flat" );
		// this.handleEl.setAttribute('ui-ripple','size:0.1 0.1;color:#999;fadeDelay:300;duration:500');
		this.handleEl.setAttribute( "class", this.data.intersectableClass + " no-yoga-layout" );
		this.handleEl.setAttribute( "position", - this.data.width / 2 + this.data.handleRadius + " 0 " + this.data.handleZIndex );
		this.handleEl.setAttribute( "segments", 6 );
		this.el.appendChild( this.handleEl );

		// Setup rail entity.
		this.railEl = document.createElement( "a-plane" );
		this.railEl.setAttribute( "width", this.data.width - 0.1 );
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
			this.slide( this.scroll_perc, true );

		} );
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
		this.handleEl.addEventListener( "mousedown", e => {

			// Pause look controls to allow scrolling
			playPauseCamera( "pause" );
			this.isDragging = true;
			// Store the start point offset
			this.el.emit( "slide-start", this.scroll_perc );
			this.handlePos = this.handleEl.object3D.worldToLocal( e.detail.intersection ? e.detail.intersection.point : e.relatedTarget.object3D.position ).x;
			this.backgroundPanel.addEventListener( "ui-mousemove", mousemove );
			// Start changes
			UI.utils.isChanging( this.el.sceneEl, this.handleEl.object3D.uuid );
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
				this.el.emit( "slide-end", this.scroll_perc );
				UI.utils.stoppedChanging( this.handleEl.object3D.uuid );
				// Prevent default behaviour of event
				UI.utils.preventDefault( e );

			}

		};
		this.backgroundPanel.addEventListener( "mouseup", endScroll );
		this.backgroundPanel.addEventListener( "mouseleave", endScroll );
		// // Handle clicks on rail to scroll
		this.railEl.addEventListener( "mousedown", e => {

			UI.utils.isChanging( this.el.sceneEl, this.handleEl.object3D.uuid );
			// Pause look controls
			this.isDragging = true;
			// Reset handle pos to center of handle
			this.handlePos = 0;
			// Scroll immediately and register mouse move events.
			this.slide( this.railEl.object3D.worldToLocal( e.detail.intersection ? e.detail.intersection.point : e.relatedTarget.object3D.position ).x );
			this.backgroundPanel.addEventListener( "ui-mousemove", mousemove );
			this.el.emit( "slide-end", this.scroll_perc );
			// Prevent default behaviour of event
			UI.utils.preventDefault( e );

		} );
		this.el.slide = this.slide.bind( this );
		this.el.getValue = this.getValue.bind( this );
		this.el.railEl = this.railEl;

	},
	slide( positionX, isPerc ) {

		let min = - this.data.width / 2 + this.data.handleRadius;
		let max = this.data.width / 2 - this.data.handleRadius;
		// Set scroll position with start point offset.
		let scroll_pos = isPerc ? min + ( max - min ) * positionX : THREE.Math.clamp( positionX, min, max );
		this.scroll_perc = isPerc ? positionX : ( scroll_pos - min ) / ( max - min );
		this.el.emit( "slide", this.scroll_perc );
		//this.progress.scale.set( this.scroll_perc || 0.0001, 1, 1 );
		/*this.progress.position.set(
			- ( this.data.width - this.data.handleRadius ) / 2 + this.scroll_perc * ( ( this.data.width - this.data.handleRadius ) / 2 ),
			0,
			0.0001
		);
		*/
		this.handleEl.setAttribute( "position", /*((this.data.width/2)+this.data.scrollPadding)+' '+*/ scroll_pos + " 0 " + ( this.data.scrollZOffset + 0.0005 ) );

	},
	mouseMove( e ) {

		if ( this.isDragging ) {

			let pos = this.railEl.object3D.worldToLocal( e.detail.intersection.point );
			this.slide( pos.x - this.handlePos + this.data.handleRadius );

		}

	},
	getRailObject( object ) {

		// Get the rounded shape geomtery.
		object.traverse( child => {

			if ( child.geometry && child.geometry.type === "ShapeBufferGeometry" ) {

				this.progress = new THREE.Mesh( child.geometry.clone(), new THREE.MeshBasicMaterial( { color: this.data.progressColor } ) );
				this.progress.position.set( - this.data.width / 2, 0, 0.0001 );
				this.progress.scale.set( 0.00001, 1, 1 );
				this.el.object3D.add( this.progress );

			}

		} );

	}
} );


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * NUmber widget Component for aframe-material-collection. Includes up/down buttons
 * @namespace aframe-material-collection
 * @component ui-number
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-number", {
	schema: {
		value: { type: "number", default: 0 },
		increment: { type: "number", default: 0.001 },
		width: { type: "number", default: 0.65 },
		height: { type: "number", default: 0.2 },
		intersectableClass: { default: "intersectable" }
	},
	init() {

		this.setupElements();

	},
	setupElements() {

		let numberText = document.createElement( "a-plane" );
		numberText.setAttribute( "width", "0.55" );
		numberText.setAttribute( "height", "0.2" );
		numberText.className = "no-yoga-layout";
		numberText.setAttribute( "color", "#212121" );
		numberText.setAttribute( "text", "value:" + this.data.value.toFixed( 3 ) + ";color:#212121;wrapCount:12;align:center" );
		numberText.setAttribute( "ui-border", "borderRadius:0.1;borderWidth:0.008" );

		let upButton = document.createElement( "a-ui-fab-button-small" );
		upButton.setAttribute( "scale", "0.75 0.75 0.75" );
		upButton.className = "no-yoga-layout " + this.data.intersectableClass;
		upButton.setAttribute( "color", "#009688" );
		upButton.setAttribute( "position", "0.33 0.055 0.001" );
		upButton.setAttribute( "color", "#009688" );
		upButton.setAttribute( "icon-color", "#fff" );
		upButton.setAttribute( "ripple-color", "#009688" );
		upButton.setAttribute( "src", "https://cdn.theexpanse.app/images/icons/baseline_keyboard_arrow_up_white_18dp.png" );
		upButton.addEventListener( "click", () => {

			this.data.value += this.data.increment;
			numberText.setAttribute( "text", "value:" + this.data.value.toFixed( 3 ) + ";color:#212121;wrapCount:12;align:center" );
			this.el.emit( "change", this.data.value );

		} );
		let downButton = document.createElement( "a-ui-fab-button-small" );
		downButton.setAttribute( "scale", "0.75 0.75 0.75" );
		downButton.className = "no-yoga-layout " + this.data.intersectableClass;
		downButton.setAttribute( "color", "#009688" );
		downButton.setAttribute( "position", "0.33 -0.055 0.001" );
		downButton.setAttribute( "color", "#009688" );
		downButton.setAttribute( "icon-color", "#fff" );
		downButton.setAttribute( "ripple-color", "#009688" );
		downButton.setAttribute( "src", "https://cdn.theexpanse.app/images/icons/down_arrow.png" );
		downButton.addEventListener( "click", () => {

			this.data.value -= this.data.increment;
			numberText.setAttribute( "text", "value:" + this.data.value.toFixed( 3 ) + ";color:#212121;wrapCount:12;align:center" );
			this.el.emit( "change", this.data.value );

		} );
		numberText.appendChild( upButton );
		numberText.appendChild( downButton );
		this.el.appendChild( numberText );

	}
} );

/*
<a-plane class="zInput" width="0.55" ui-border="borderRadius:0.1;borderWidth:0.008" height="0.2" color="#212121" text="value:{{to-fixed vector.z 3}};color:#212121;wrapCount:12;align:center">
        <a-ui-fab-button-small scale="0.75 0.75 0.75" class="zInputUp intersectable no-yoga-layout" color="#009688" position="0.33 0.055 0.001" icon-color="#fff" ripple-color="#009688" src="https://cdn.theexpanse.app/images/icons/baseline_keyboard_arrow_up_white_18dp.png"></a-ui-fab-button-small>
        <a-ui-fab-button-small scale="0.75 0.75 0.75" class="zInputDown intersectable no-yoga-layout" color="#009688" position="0.33 -0.055 0.001" icon-color="#fff" ripple-color="#009688" src="https://cdn.theexpanse.app/images/icons/down_arrow.png"></a-ui-fab-button-small>
    </a-plane>
 */


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

    update(data) {

		if ( this.data.disabled ) {

			this.railEl.addEventListener( "mouseover", e => this.mouseEnter( e ) );		
			this.railEl.addEventListener( "mouseout", e => this.mouseLeave( e ) );

		} else {

			this.railEl.removeEventListener( "mouseover", e => this.mouseEnter( e ) );
			this.railEl.removeEventListener( "mouseout", e => this.mouseLeave( e ) );

		}
console.error(this.data.value)
//		this.el.setAttribute( "value", this.data.value );
		this.click();

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


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN */
/**
 * Checkbox Component for aframe-material-collection. Includes animation and disabled state.
 * @namespace aframe-material-collection
 * @component ui-checkbox
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-checkbox", {
	schema: {
		value: { type: "boolean", default: false },
		selectedColor: { default: "#009688" },
		unselectedColor: { default: "#7f7f7f" },
		disabledColor: { default: "#afafaf" },
		indeterminate: { type: "boolean", default: false },
		disabled: { type: "boolean", default: false },
		intersectableClass: { default: "intersectable" },
		width: { type: "number", default: 0.15 },
		height: { type: "number", default: 0.15 }
	},
	init() {

		this.width = 0.15;
		this.height = 0.15;
		this.container = document.createElement( "a-entity" );
		this.container.setAttribute( "class", "no-yoga-layout" );
		this.el.appendChild( this.container );
		this.setupLines();
		// Add backing element to make the whole object clickable.
		let backing = document.createElement( "a-plane" );
		backing.setAttribute( "width", 0.105 );
		backing.setAttribute( "height", 0.105 );
		backing.setAttribute( "position", "0 0 -0.002" );
		backing.setAttribute( "shader", "flat" );
		backing.setAttribute( "class", this.data.intersectableClass + " no-yoga-layout" );
		backing.setAttribute( "opacity", 0.0001 );
		backing.setAttribute( "transparent", true );
		this.el.appendChild( backing );
		this.clickHandler = () => {

			this.data.value = ! this.data.value;
			this.click();

		};
		// Setup initial state
		this.setSelected();
		this.setDisabled();
		this.setTransform( 1 );

	},
	updateSchema() {

		if ( this.data ) {

			this.setDisabled();
			if ( this.data.disabled ) {

				if ( this.data.value ) {

					this.data.value = false;
					this.data.indeterminate = false;
					this.click();

				}

			} else {

				this.click();

			}

		}

	},
	setTransform( x ) {

		// Adjust position and rotation based on the interpolated value x between 0 and 1.
		// Used to offset the checkbox when in a checked state
		if ( this.data.value ) {

			this.container.setAttribute( "rotation", { x: 0, y: 0, z: - 45 * x } );
			this.container.setAttribute( "position", { x: - 0.025 * x, y: 0.05 * x, z: 0 } );

		} else {

			this.container.setAttribute( "rotation", { x: 0, y: 0, z: - 45 + 45 * x } );
			this.container.setAttribute( "position", { x: 0.025 - 0.025 * x, y: 0.05 - 0.05 * x, z: 0 } );

		}

	},
	click() {

		// Reset indeterminate state on click
		this.data.indeterminate = false;
		// Hide / Show left and top lines for checked state, or right line aswell for intermediate state.
		this.setSelected();
		// run animation
		this.animateSelected();

	},
	animateSelected() {

		let _this = this;
		// Start changes
		UI.utils.isChanging( this.el.sceneEl, this.el.object3D.uuid );
		new TWEEN.Tween( { x: 0 } )
			.to( { x: 1 }, 200 )
			.onUpdate( function () {

				_this.setTransform( this.x );

			} )
			.onComplete( function () {

				// Stop changes
				UI.utils.stoppedChanging( _this.el.object3D.uuid );

			} )
			.easing( TWEEN.Easing.Exponential.Out )
			.start();

	},
	setSelected() {

		// Hide / Show lines that make up checkbox based on the current state.
		if ( this.data.value ) {

			this.topLine.setAttribute( "scale", "0.000001 0.000001 0.000001" );
			this.leftLine.setAttribute( "scale", "0.000001 0.000001 0.000001" );
			this.bottomLine.setAttribute( "scale", "1 1 1" );
			this.rightLine.setAttribute( "scale", "1 1 1" );
			this.bottomLine.setAttribute( "position", "0.025 -0.05 0" );
			this.rightLine.setAttribute( "position", "0.05 0 0" );
			this.bottomLine.setAttribute( "rotation", "0 0 90" );
			this.bottomLine.setAttribute( "height", 0.05 );
			this.bottomLine.setAttribute( "color", this.data.selectedColor );
			this.rightLine.setAttribute( "color", this.data.selectedColor );

		} else if ( this.data.indeterminate ) {

			this.topLine.setAttribute( "scale", "0.000001 0.000001 0.000001" );
			this.leftLine.setAttribute( "scale", "0.000001 0.000001 0.000001" );
			this.bottomLine.setAttribute( "scale", "1 1 1" );
			this.rightLine.setAttribute( "scale", "0.000001 0.000001 0.000001" );
			this.bottomLine.setAttribute( "position", "0 0 0" );
			this.bottomLine.setAttribute( "rotation", "0 0 90" );
			this.bottomLine.setAttribute( "height", 0.1 );
			this.bottomLine.setAttribute( "color", this.data.unselectedColor );
			this.rightLine.setAttribute( "color", this.data.unselectedColor );

		} else {

			this.topLine.setAttribute( "scale", "1 1 1" );
			this.leftLine.setAttribute( "scale", "1 1 1" );
			this.bottomLine.setAttribute( "scale", "1 1 1" );
			this.rightLine.setAttribute( "scale", "1 1 1" );
			this.bottomLine.setAttribute( "height", 0.1 );
			this.leftLine.setAttribute( "position", "-0.05 0 0" );
			this.rightLine.setAttribute( "position", "0.05 0 0" );
			this.topLine.setAttribute( "position", "0 0.05 0" );
			this.bottomLine.setAttribute( "position", "0 -0.05 0" );
			this.topLine.setAttribute( "rotation", "0 0 90" );
			this.bottomLine.setAttribute( "rotation", "0 0 90" );
			this.bottomLine.setAttribute( "color", this.data.unselectedColor );
			this.rightLine.setAttribute( "color", this.data.unselectedColor );

		}

	},
	setupLines() {

		// Add four lines to make a square wireframe
		this.leftLine = this.line( true );
		this.rightLine = this.line( true );
		this.topLine = this.line( true );
		this.bottomLine = this.line( true );
		this.container.appendChild( this.topLine );
		this.container.appendChild( this.leftLine );
		this.container.appendChild( this.bottomLine );
		this.container.appendChild( this.rightLine );

	},
	setDisabled() {

		// Check and set the disabled state of the checkbox - add / remove click handler.
		if ( this.data.disabled ) {

			this.el.removeEventListener( "mousedown", this.clickHandler );
			this.topLine.setAttribute( "color", this.data.disabledColor );
			this.leftLine.setAttribute( "color", this.data.disabledColor );
			this.rightLine.setAttribute( "color", this.data.disabledColor );
			this.bottomLine.setAttribute( "color", this.data.disabledColor );

		} else {

			this.el.addEventListener( "mousedown", this.clickHandler );
			this.topLine.setAttribute( "color", this.data.unselectedColor );
			this.leftLine.setAttribute( "color", this.data.unselectedColor );
			this.rightLine.setAttribute( "color", this.data.value ? this.data.selectedColor : this.data.unselectedColor );
			this.bottomLine.setAttribute( "color", this.data.value ? this.data.selectedColor : this.data.unselectedColor );

		}

	},
	line( is_vertical ) {

		// Create horizontal/vertical line.
		let line = document.createElement( "a-plane" );
		line.setAttribute( "width", is_vertical ? 0.01 : 0.105 );
		line.setAttribute( "height", is_vertical ? 0.105 : 0.01 );
		line.setAttribute( "class", "no-yoga-layout" );
		line.setAttribute( "shader", "flat" );
		return line;

	}
} );


/***/ }),
/* 14 */
/***/ (function(module, exports) {

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
		this.filled_circle.setAttribute( "scale", "1 1 1" );
		//this.filled_circle.setAttribute( "color", this.data.disabled ? this.data.disabledColor : this.data.selectedColor );
		this.filled_circle.setAttribute( "shader", "flat" );
		this.filled_circle.setAttribute( "class", this.data.intersectableClass + "no-yoga-layout" );
		this.filled_circle.setAttribute( "segments", 6 );
		//this.el.components.material.material.color = new THREE.Color( this.data.disabled ? this.data.disabledColor : this.data.unselectedColor );
		this.el.appendChild( this.filled_circle );
		// Create backing for getting click events.
		this.backing = document.createElement( "a-circle" );
		this.backing.setAttribute( "radius", this.data.selectedRadius );
		this.backing.setAttribute( "position", "0 0 -0.005" );
		this.backing.setAttribute( "class", this.data.intersectableClass + " no-yoga-layout" );
		this.backing.setAttribute( "shader", "flat" );
		this.backing.setAttribute( "segments", 6 );
		// this.backing.setAttribute("opacity", 0.0001);
		// this.backing.setAttribute("transparent", true);

		this.el.appendChild( this.backing );

		// Set this if it is checked.
		if ( this.data.selected ) {

			this.click();

		}else {
			this.deselect();
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
		this.filled_circle.setAttribute( "color", "#5f5f5f");
		//_this.filled_circle.object3D.scale.set( 0.1, 0.1, 0.1 );
		UI.utils.stoppedChanging( _this.filled_circle.object3D.uuid );
		this.isRippling = false;
	/*	new TWEEN.Tween( { x: 1 } )
			.to( { x:0 }, 0 )
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
*/
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
		console.error("radio tween")
		this.filled_circle.setAttribute( "color", "#ffffff" );
		//_this.filled_circle.object3D.scale.set( 0.9, 0.9,0.9 );
		UI.utils.stoppedChanging( this.filled_circle.object3D.uuid );
		this.isSelecting = false;

	/*	new TWEEN.Tween( { x: 1 } )
			.to( { x: 0 }, 0 )
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
*/
	},
	remove() {
		this.el.removeObject3D("ui-radio")
		this.el.object3D.remove(this.backing)
		this.el.object3D.remove(this.filled_circle )
	
	}
} );


/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = {"name":"aframe-material-collection","version":"0.5.0","description":"Material UI based primitives and components for use in your aframe projects.","homepage":"https://github.com/shaneharris/aframe-material-collection","keywords":["AFRAME","UI","Material"],"scripts":{"start":"webpack-dev-server --mode development","build":"webpack --mode production"},"repository":{"type":"git","url":"git@github.com:shaneharris/aframe-material-collection.git"},"bugs":{"url":"https://github.com/shaneharris/aframe-material-collection/issues"},"devDependencies":{"uglifyjs-webpack-plugin":"^1.2.7","webpack":"^4.16.1","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.4"},"author":"Shane Harris","license":"MIT","dependencies":{}};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Button Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-button
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive(
	"a-ui-icon-button",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
		
			"box-rounded": {width: 0.03,
				height: 0.01,
				depth: 0.01,
				color: "#000111",
				curveSegments: 13,
				borderRadius: 0.01,
				material: "standard",
				depth: 0.02,
				envMapIntensity: 0.4
			},
			
			"ui-btn": {
				animated: "ui-btn.animated",
			},

			"troika-text": {
				align: "center",
				depthOffset: -6000,
				wrapCount: 10,
				fontSize: 0.015
			},
			"ui-icon": {
				zIndex: 0.02
			},

			
		},
		mappings: {
			height: "box-rounded.height",
			width: "box-rounded.width",
			depth: "box-rounded.depth",
			color: "box-rounded.color",
			transparent: "box-rounded.transparent",
			
            "text-value": "troika-text.value",
			src: "ui-icon.src",
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
			disabled: "ui-btn.disabled",
			"hover-height": "ui-btn.hoverHeight",
			"active-height": "ui-btn.activeHeight"
		}
	} )
);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Text Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-text-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive(
	"a-ui-text-input",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			"ui-text": {
				placeHolder: "Text..."
			},
			"ui-double-click": {}
		},
		mappings: {
			width: "ui-text.width",
			height: "ui-text.height",
			value: "ui-text.value",
			"place-holder": "ui-text.placeHolder"
		}
	} )
);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Scroll Pane Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-scroll-pane
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive(
	"a-ui-scroll-pane",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
			"ui-scroll-pane": {}
		},
		mappings: {
			width: "ui-scroll-pane.width",
			height: "ui-scroll-pane.height",
			"scroll-z-offset": "ui-scroll-pane.scrollZOffset",
			"handle-color": "ui-scroll-pane.scrollHandleColor",
			"scroll-padding": "ui-scroll-pane.scrollPadding",
			"look-controls-el": "ui-scroll-pane.cameraEl",
			"look-controls-component": "ui-scroll-pane.lookControlsComponent"
		}
	} )
);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * A component to load an icon and set some defaults for positioning and transparency.
 * @namespace aframe-material-collection
 * @component ui-icon
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent("ui-icon", {
	schema: {
		src: { default: "" },
		size: { type: "vec2", default: { x: 0.1, y: 0.1 } },
		zIndex: { type: "number", default: 0.003 },
		color: { default: "#fff" }
	},
	init() {

		/*	this.icon = new THREE.Mesh(
				new THREE.PlaneGeometry( this.data.size.x, this.data.size.y ),
				new THREE.MeshBasicMaterial( { color: this.data.color, alphaTest: 0.4, transparent: true, map: new THREE.TextureLoader().load( this.data.src ) } )
			);
			this.icon.position.set( 0, 0, this.data.zIndex );
			this.el.object3D.add( this.icon );
	*/


	}

	,
	update() {

		const textureLoader = new THREE.TextureLoader().load(this.data.src)
		const material = new THREE.MeshBasicMaterial({ color: this.data.color, alphaTest: 0.4, transparent: true, map: textureLoader })

		textureLoader.dispose();
		this.icon = new THREE.Mesh(
			new THREE.PlaneGeometry(this.data.size.x, this.data.size.y),
			material
		);
		this.icon.position.set(0, 0, this.data.zIndex);
		this.el.object3D.add(this.icon);
		


	},
	remove() {
		this.el.object3D.remove(this.el.object3D)
	
		this.icon.geometry.dispose();
		this.icon.material.map.dispose();
		this.icon.material.dispose();
	    this.icon = null; 
		this.el.remove("ui-icon")
		




	}
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Rounded corners Component for aframe-material-collection. Expects an a-plane entity.
 * @namespace aframe-material-collection
 * @component ui-rounded
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-rounded", {
	schema: {
		borderRadius: { type: "number", default: 0.01 },
		curveSegments: { type: "int", default: 1 }
	},
	init() {

	/*	let mesh = this.el.getObject3D( "mesh" );
		let roundedRectShape = new THREE.Shape();
		// Draw the Rounded rectangle shape centered in the object - from three.js shapes example.
		( function roundedRect( ctx, x, y, width, height, radius ) {

			ctx.moveTo( x, y + radius );
			ctx.lineTo( x, y + height - radius );
			ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
			ctx.lineTo( x + width - radius, y + height );
			ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
			ctx.lineTo( x + width, y + radius );
			ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
			ctx.lineTo( x + radius, y );
			ctx.quadraticCurveTo( x, y, x, y + radius );

		} )(
			roundedRectShape,
			- mesh.geometry.metadata.parameters.width / 2,
			- mesh.geometry.metadata.parameters.height / 2,
			mesh.geometry.metadata.parameters.width,
			mesh.geometry.metadata.parameters.height,
			this.data.borderRadius
		);
		// Update the geometry.
		mesh.geometry = new THREE.ShapeBufferGeometry( roundedRectShape, this.data.curveSegments );
*/
		// Emit rounded-loaded event once the geometry has been updated.
		this.el.emit( "rounded-loaded", null, false );

	}
	,
	remove() {
		this.el.removeObject3D('ui-rounded');
	}
} );


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Ripple Component for aframe-material-collection. Add a ripple to an entity with options for controlling
 * clamping the animation and offsetting the ripple z position to place on top or bottom
 * @namespace aframe-material-collection
 * @component ui-ripple
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent( "ui-ripple", {
	schema: {
		color: { default: "#fff" },
		duration: { type: "int", default: 1000 },
		fadeDuration: { type: "int", default: 750 },
		fadeDelay: { type: "int", default: 250 },
		clampToSquare: { type: "boolean", default: false },
		size: { type: "vec2", default: { x: 1, y: 1 } },
		zIndex: { type: "number", default: 0.01 },
		segments: { type: "int", default: 6 }
	},
	init() {

		// Setup circle geometry for ripple effect
		this.rippleGeometry = new THREE.CircleGeometry( Math.max( this.data.size.x, this.data.size.y ), this.data.segments );
		this.ripple = new THREE.Mesh(
			this.rippleGeometry.clone(),
			new THREE.MeshBasicMaterial( { color: this.data.color, transparent: false, opacity: 0.4, alphaTest: 0.1 } )
		);
		this.ripple.scale.set( 0.00001, 0.00001, 0.00001 );
		
		this.el.object3D.add( this.ripple );
		this.el.addEventListener( "mousedown", this.click.bind( this ) );
		this.ripple.position.set( 0, 0, this.data.zIndex );
		// Set clipping planes if clamping to square
		if ( this.data.clampToSquare ) {

			this.content_clips = [
				new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), this.data.size.y / 2 ),
				new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), this.data.size.y / 2 ),
				new THREE.Plane( new THREE.Vector3( - 1, 0, 0 ), this.data.size.x / 2 ),
				new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), this.data.size.x / 2 )
			];

		}

	},
	click( e ) {

		if ( this.isRippling ) {

			// Throttle clicks.
			return e.preventDefault();

		}
		this.isRippling = true;
		// Set clipping planes if clamping to square
		if ( this.data.clampToSquare ) {

			this.setRippleClips( this.ripple.material );

		}
		// Animate the size of the circle ripple from the center of the entity.
		this.tweenSize( this.ripple.geometry );
		// Fade the circle out as it ripples.
		this.tweenOpacity( this.ripple.material );

	},
	setRippleClips() {

		// update content clips world positions from this current element.
		this.content_clips[ 0 ].set( new THREE.Vector3( 0, 1, 0 ), this.data.size.y / 2 );
		this.content_clips[ 1 ].set( new THREE.Vector3( 0, - 1, 0 ), this.data.size.y / 2 );
		this.content_clips[ 2 ].set( new THREE.Vector3( - 1, 0, 0 ), this.data.size.x / 2 );
		this.content_clips[ 3 ].set( new THREE.Vector3( 1, 0, 0 ), this.data.size.x / 2 );
		//this.el.sceneEl.object3D.updateMatrixWorld();
		this.content_clips[ 0 ].applyMatrix4( this.el.object3D.matrixWorld );
		this.content_clips[ 1 ].applyMatrix4( this.el.object3D.matrixWorld );
		this.content_clips[ 2 ].applyMatrix4( this.el.object3D.matrixWorld );
		this.content_clips[ 3 ].applyMatrix4( this.el.object3D.matrixWorld );
		this.ripple.material.clippingPlanes = this.el._content_clips ? this.el._content_clips.concat( this.content_clips ) : this.content_clips;
		this.ripple.material.clipShadows = true;
		this.ripple.material.needsUpdate = true;

	},
	tweenSize( geometry ) {

		let _this = this;
		// Start changes
		UI.utils.isChanging( this.el.sceneEl, _this.ripple.uuid );
		new TWEEN.Tween( { x: 0.00001 } )
			.to( { x: 1 }, this.data.duration )
			.onUpdate( function () {

				_this.ripple.scale.set( this.x, this.x, this.x );

			} )
			.onComplete( () => {

				_this.ripple.scale.set( 0.00001, 0.00001, 0.00001 );
				// Reset throttle flag.
				this.isRippling = false;
				// Stop changes
				UI.utils.stoppedChanging( _this.ripple.uuid );

			} )
			.easing( TWEEN.Easing.Exponential.Out )
			.start();

	},
	tweenOpacity( material ) {

		new TWEEN.Tween( { x: 0.4 } )
			.to( { x: 0 }, this.data.fadeDuration )
			.delay( this.data.fadeDelay )
			.onUpdate( function () {

				material.opacity = this.x;

			} )
			.onComplete( () => {

				material.opacity = 0.4;

			} )
			.easing( TWEEN.Easing.Exponential.Out )
			.start();

	},
	remove() {
		
		this.el.removeObject3D('ui-ripple');
		
	//	this.ripple.dispose();
	
		this.el.remove(this.rippleGeometry)
		this.el.remove(this.ripple )
		this.el.remove(self )
		this.el.remove(this.object3D )
		//this.rippleGeometry.dispose();
		console.error(this.el)
		//this.el.dispose();
		//this.el.object3D.geometry.dispose();
	}
} );


/***/ }),
/* 22 */
/***/ (function(module, exports) {

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
		lookControlsComponent: { default: "look-controls" },
	},
	init() {

		if ( ! AFRAME.utils.device.isMobile() )
			return;
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
		//	this.container.setAttribute( "position", - this.data.width / 2 + " " + position.y +  " " + this.data.height / 2 + " " + position.z );

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

				UI.utils.preventDefault( e );

			}

		};

		const mouseMove = ( e ) => {

			   if ( this.isDragging ) {

				if ( this.handlePos === 0 ) {

					this.handlePos = e.detail.intersection.point;
					this.el.sceneEl.emit( "stateadded", { detail: "scroll" } );
					console.error( "stateadded scroll" );

				}

				   const pos = this.backgroundPanel.object3D.worldToLocal( e.detail.intersection.point );
				   const posInter = e.detail.intersection.point;

				   //this.scroll( -pos.y + this.handlePos );

				   this.scroll( pos.y - this.handlePos.y );

			}

		   };

	   	const mouseOver = ( e ) => {

		   };

		const startScroll = ( e ) => {

			console.error( "startScroll" );
			this.el.sceneEl.emit( "stateremoved", { detail: "noscroll" } );
			this.isDragging = true;
			// Reset handle pos to center of handle
			 // this.backgroundPanel.object3D.position.y;
			console.error( this.backgroundPanel.object3D.position.y );
			// Scroll immediately and register mouse move events.

			//this.scroll( this.backgroundPanel.object3D.worldToLocal( e.detail.intersection ? e.detail.intersection.point : e.relatedTarget.object3D.position ).y );
			//this.scoll(10)

			UI.utils.preventDefault( e );

		};

		this.backgroundPanel.addEventListener( "mouseup", endScroll );
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
			UI.utils.preventDefault( e );

		} );

		// Setup content clips after the scene is loaded to be able to access all entity materials

		// update content clips world positions from this current element.

		//	this.updateContent();
		//	this.el.emit( "scroll-pane-loaded" );
		//	this.setupMouseWheelScroll();

		// Expose methods to the element to update/set the content of the scroll pane.
		//	this.el.setContent = this.setContent.bind( this );
		//	this.el.updateContent = this.updateContent.bind( this );
		this.el.scroll = this.scroll.bind( this );

	},

	scroll( positionY ) {

		const min = - this.data.height / 2 + ( this.data.height * this.handleSize ) / 2;
		const max = this.data.height / 2 - ( this.data.height * this.handleSize ) / 2;
		// Set scroll position with start point offset.
		const scroll_pos = THREE.Math.clamp( positionY, min, max );
		const scroll_perc = this.handleSize === 1 ? 0 : 1 - ( scroll_pos - min ) / ( max - min );

		this.container.object3D.position.y = positionY; // ( this.content_height - this.data.height ) * scroll_perc + this.data.height / 2;
		//this.handle.setAttribute( "position", this.data.width / 2 + this.data.scrollPadding + " " + scroll_pos + " " + ( this.data.scrollZOffset + 0.0005 ) );

	},

	setupElements() {

		// Setup background with mouse input to catch mouse move events when not exactly over the scroll bar.
		this.backgroundPanel = document.createElement( "a-plane" );
		//this.backgroundPanel.setAttribute( "class", "ui background " + this.data.intersectableClass );
		this.backgroundPanel.setAttribute( "width", this.data.width );
		this.backgroundPanel.setAttribute( "height", this.data.height );
		this.backgroundPanel.setAttribute( "position", "0 0 0.55" );
		this.backgroundPanel.setAttribute( "class", "ui" );
		this.backgroundPanel.setAttribute( "visible", "false" );
		///this.backgroundPanel.setAttribute( "opacity", 0.1 ); //
		//	this.backgroundPanel.setAttribute( "transparent", false );

		this.el.appendChild( this.backgroundPanel );

		/*
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
*/

	},

} );


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.js
class Utils {

	constructor() {

		this.changesDetected = {};
		this.is_changeing = false;
		// setInterval(()=>{
		//     let now = new Date().getTime();
		//     for(let key in this.changesDetected){
		//         let change = this.changesDetected[key];
		//         if(change.t&&now-change.t>2000){
		//             this.stoppedChanging(key);
		//         }
		//     }
		// },2000);

	}
	isFirstOrLastChange() {

		let empty = true;

		for ( let key in this.changesDetected ) {

			empty = false;
			break;

		}

		if ( ! this.is_changeing && ! empty ) {

			this.scene.emit( "ui-changing" );
			this.is_changeing = true;

		} else if ( this.is_changeing && empty ) {

			if ( this.is_changeing ) {

				this.scene.emit( "ui-changing-stopped" );
				this.is_changeing = false;

			}

		}

	}
	preventDefault( e ) {

		if ( e.detail && e.detail.preventDefault && typeof e.detail.preventDefault === "function" ) {

			e.detail.preventDefault();

		}

	}
	shorten( string, length ) {

		return string.length > length ? string.substr( 0, length ) + "..." : string;

	}
	ucFirst( string ) {

		return string.charAt( 0 ).toUpperCase() + string.slice( 1 );

	}
	isChanging( scene, ref ) {

		let index = this.changesDetected[ ref ];
		if ( ! index ) {

			this.scene = this.scene || scene;
			let now = new Date().getTime();
			this.changesDetected[ ref ] = { t: now };
			this.isFirstOrLastChange();

		} else {

			this.changesDetected[ ref ].t = new Date().getTime();

		}

	}
	stoppedChanging( ref ) {

		delete this.changesDetected[ ref ];
		this.isFirstOrLastChange();

	}
	copyToClipboard( text ) {

		navigator.clipboard.writeText( text ).then(
			() => {},
			err => {

				console.error( "copy to clipboard failed:", err );

			}
		);

	}
	clearObject( object ) {

		object.traverse( child => {

			if ( child.material ) {

				if ( child.material.length ) {

					for ( let i = 0; i < child.material.length; i ++ ) {

						if ( child.material[ i ].map ) {

							child.material[ i ].map.dispose();

						}
						child.material[ i ].dispose();

					}

				} else {

					if ( child.material.map ) {

						child.material.map.dispose();

					}
					child.material.dispose();

				}

			}
			if ( child.geometry ) {

				child.geometry.dispose();

			}

		} );

	}

}

// CONCATENATED MODULE: ./src/index.js
/* global AFRAME */
/**
 * Application entry point
 * @author Shane Harris
 */


let version = __webpack_require__( 15 ).version;
console.log( "aframe-material-collection version test" + version );

if ( typeof AFRAME === "undefined" ) {

	throw 'aframe-material-collection requires AFRAME to be loaded first. - <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>';

}
let utils = new Utils();

window.UI = {
	// Utils
	utils: utils,
	// Primitives
	a_ui_button: __webpack_require__( 0 ),
	a_ui_icon_button: __webpack_require__( 16 ),
	a_ui_fab_button: __webpack_require__( 1 ),
	a_ui_fab_button_small: __webpack_require__( 2 ),
	a_ui_round_button: __webpack_require__( 3 ),
	a_ui_switch: __webpack_require__( 4 ),
	a_ui_slider: __webpack_require__( 5 ),
//	a_ui_number: require( "./primitives/number" ),
//	a_ui_toast: require( "./primitives/toast" ),
	a_ui_checkbox: __webpack_require__( 6 ),
	a_ui_radio: __webpack_require__( 7 ),
	a_ui_input_text: __webpack_require__( 8 ),
	a_ui_text_input: __webpack_require__( 17 ),
//	a_ui_number_input: require( "./primitives/number-input" ),
//	a_ui_int_input: require( "./primitives/int-input" ),
//	a_ui_password_input: require( "./primitives/password-input" ),
	a_ui_scroll_pane: __webpack_require__( 18 ),
//	a_ui_renderer: require( "./primitives/renderer" ),

	// Components
	//text: require( "./components/text" ),
	//input_text: require( "./components/input-text" ),
	btn: __webpack_require__( 9 ),
	icon: __webpack_require__( 19 ),
	rounded: __webpack_require__( 20 ),
	ripple: __webpack_require__( 21 ),
	slider: __webpack_require__( 10 ),
	number: __webpack_require__( 11 ),
	switch: __webpack_require__( 12 ),
	////toast: require( "./components/toast" ),
	scroll_pane: __webpack_require__( 22 ),
	//mouse_shim: require( "./components/mouse-shim" ),
	//double_click: require( "./components/double-click" ),
	checkbox: __webpack_require__( 13 ),
	radio: __webpack_require__( 14 ),
	//border: require( "./components/border" ),
	//curvedPlane: require( "./components/curved-plane" ),
	//colorPicker: require( "./components/color-picker" ),
	//modal: require( "./components/modal" ),
	//renderer: require( "./components/renderer" )
};
//module.exports = UI;


/***/ })
/******/ ]);
//# sourceMappingURL=aframe-material-collection.js.map