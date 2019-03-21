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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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

module.exports = AFRAME.registerPrimitive('a-ui-button', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'plane',
            width: 0.5,
            height: 0.175
        },
        material: {
            color: '#009688',
            shader: 'flat',
        },
        "ui-btn":{},
        "ui-rounded":{borderRadius:0.0025},
        "ui-ripple":{size:{x:0.5,y:0.175},clampToSquare:true,zIndex:0.001},
        text:{
            font:'roboto',
            align:'center',
            zOffset:0.002,
            wrapCount:10,
            alphaTest:0.4
        }
    },
    mappings: {
        height: 'geometry.height',
        width: 'geometry.width',
        color: 'material.color',
        transparent: 'material.transparent',
        "font-color":'text.color',
        "ripple-color":'ui-ripple.color',
        "ripple-size":'ui-ripple.size',
        "ripple-z-index":'ui-ripple.zIndex',
        "text-value": 'text.value',
        "wrap-count":'text.wrapCount',
        "border-radius":"ui-rounded.borderRadius",
        "curve-segments":"ui-rounded.curveSegments",
        disabled:'ui-btn.disabled',
        "hover-height":'ui-btn.hoverHeight',
        "active-height":'ui-btn.activeHeight'
    }
}));

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

module.exports = AFRAME.registerPrimitive('a-ui-fab-button', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'circle',
            radius: 0.1,
            segments:6
        },
        material: {
            color: '#009688',
            shader: 'flat',
        },
        "ui-btn":{},
        "ui-ripple":{size:{x:0.1,y:0.1},zIndex:0.002,fadeDelay:300,duration:500},
        "ui-icon":{size:{x:0.105,y:0.105}}
    },
    mappings: {
        radius: 'geometry.radius',
        color: 'material.color',
        "icon-color": 'ui-icon.color',
        transparent: 'material.transparent',
        src: 'ui-icon.src',
        "ripple-color":'ui-ripple.color',
        "ripple-size":'ui-ripple.size',
        "ripple-z-index":'ui-ripple.zIndex',
        disabled:'ui-btn.disabled'
    }
}));

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
module.exports = AFRAME.registerPrimitive('a-ui-fab-button-small', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'circle',
            radius: 0.075,
            segments:6
        },
        material: {
            color: '#009688',
            shader: 'flat',
        },
        "ui-btn":{},
        "ui-ripple":{size:{x:0.125,y:0.125},zIndex:-0.001,color:'#ff0000'},
        "ui-icon":{size:{x:0.075,y:0.075}, src:'icons/sort_white_64dp.png'}
    },
    mappings: {
        radius: 'geometry.radius',
        color: 'material.color',
        "icon-color": 'ui-icon.color',
        transparent: 'material.transparent',
        src: 'ui-icon.src',
        "ripple-color":'ui-ripple.color',
        "ripple-size":'ui-ripple.size',
        "ripple-z-index":'ui-ripple.zIndex',
        disabled:'ui-btn.disabled'
    }
}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Switch Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-switch
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-switch', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-switch":{}
    },
    mappings: {
        value: 'ui-switch.value',
        disabled: 'ui-switch.disabled',
    }
}));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Slider Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-slider
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-slider', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-slider":{}
    },
    mappings: {
        value: 'ui-slider.value',
        disabled: 'ui-slider.disabled',
        "camera-el": 'ui-slider.cameraEl'
    }
}));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Number Widget Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-number
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-number', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-number":{}
    },
    mappings: {

    }
}));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Toast Message Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-toast
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive('a-ui-toast', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'plane',
            width: 0.5,
            height: 0.2
        },
        material: {
            color: '#010e0f',
            shader: 'flat',
            transparent:true,
            opacity: 0.8
        },
        "ui-rounded":{borderRadius:0.01,curveSegments:3},
        text:{
            font:'roboto',
            value:'Toast Message!',
            align:'center',
            zOffset:0.002,
            wrapCount:20,
        }
    },
    mappings: {
        height: 'geometry.height',
        width: 'geometry.width',
        color: 'material.color',
        transparent: 'material.transparent',
        "font-color":'text.color',
        "text-value": 'text.value',
        "wrap-count":'text.wrapCount',
        "border-radius":"ui-rounded.borderRadius",
        "curve-segments":"ui-rounded.curveSegments"
    }
}));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Checkbox Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-checkbox
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive('a-ui-checkbox', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-checkbox":{

        },
        "ui-ripple":{
            size:{x:0.1,y:0.1},
            zIndex:-0.001,
            color:'#afafaf'
        }
    },
    mappings: {
        value: 'ui-checkbox.value',
        disabled: 'ui-checkbox.disabled',
        indeterminate:'ui-checkbox.indeterminate'
    }
}));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Radio Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-radio
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-radio', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-radio":{},
        "geometry":{
            primitive:'ring',
            radiusInner:0.0575,
            radiusOuter:0.0675,
            segmentsTheta:6
        },
        "material":{
            shader:'flat',
            color:'#afafaf'
        },
        "ui-ripple":{
            size:{x:0.1,y:0.1},
            zIndex:-0.001,
            color:'#afafaf'
        }
    },
    mappings: {
        color:'ui-radio.selectedColor',
        value: 'ui-radio.value',
        selected: 'ui-radio.selected',
        disabled: 'ui-radio.disabled',
    }
}));

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Text Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-input-text
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-input-text', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-input-text":{
            placeHolder:'Text...',
            width:1,
            height:0.2,
            value:''
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-input-text.width",
        height:"ui-input-text.height",
        type:"ui-input-text.type",
        value:"ui-input-text.value",
        "background-color":"ui-input-text.backgroundColor",
        "place-holder":"ui-input-text.placeHolder",
        "camera-el":"ui-input-text.cameraEl",
        "rig-el":"ui-input-text.rigEl",
        "look-controls-component":"ui-input-text.lookControlsComponent",
        "wasd-controls-component":"ui-input-text.wasdControlsComponent",
    }
}));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Scroll Pane Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-scroll-pane
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-scroll-pane', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-scroll-pane":{

        }
    },
    mappings: {
        width:"ui-scroll-pane.width",
        height:"ui-scroll-pane.height",
        "scroll-z-offset":"ui-scroll-pane.scrollZOffset",
        "handle-color":"ui-scroll-pane.scrollHandleColor",
        "scroll-padding":"ui-scroll-pane.scrollPadding",
        "look-controls-el":"ui-scroll-pane.cameraEl",
        "look-controls-component":"ui-scroll-pane.lookControlsComponent"
    }
}));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Renderer Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-renderer
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-renderer', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-renderer":{}
    },
    mappings: {
        "ui-panel":"ui-renderer.uiPanel",
        "look-controls-el":"ui-renderer.lookControlsEl",
        "look-controls-component":"ui-renderer.lookControlsComponent",
        "panel-position":"ui-renderer.panelPosition",
        "panel-size":"ui-renderer.panelSize",
        "render-resolution":"ui-renderer.renderResolution",
        "debug-raycaster":"ui-renderer.debugRaycaster",
        "fps":"ui-renderer.fps",
        "intersectable-class":"ui-renderer.intersectableClass",
        "render-debug":"ui-renderer.debug"
    }
}));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Text input component Component for aframe-material-collection. Includes support for number/int only input.
 * @namespace aframe-material-collection
 * @component ui-text-input
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-input-text', {
    depends:['text'],
    schema: {
        value: {default: ''},
        disabled: {type: 'boolean', default: false},
        type: {default: 'text'},
        cameraEl:{type:'selector'},
        rigEl:{type:'selector'},
        width:{type:'number',default:1},
        height:{type:'number',default:0.2},
        backgroundColor:{default:'white'},
        lookControlsComponent:{default:'look-controls'},
        wasdControlsComponent:{default:'wasd-controls'},
        placeHolder:{default:'Text...'}
    },
    init(){
        this.setupElements();
        this.setupScrollClips();
        this.text.addEventListener('textfontset',()=>{
            this.text.selectionStart = 0;
            this.text.selectionLength = 0;
            this.startSelection = 0;
            this.scrollOffset = 0;
            this.alphabet = {};
            this.scrollIndex = 0;
            let chars = this.data.value.split('');
            this.chars = [];
            this.charsAllowed = ['-','_','+','=','{','}','[',']',':',';','\'','@','~','#','<','>',',','.','?','/','|','\\','`','¬'];
            for(let i = 0; i < chars.length; i++){
                this.chars.push({char:chars[i]});
            }
            this.blurHandler = ()=>this.blur();
            this.isMoving = false;
            let mousemove = this.onMousemove.bind(this);
            this.keydown = e=>this.handleKeyboardEvent(e);
            this.backing.addEventListener('mousedown',()=>{
                this.focus();
                this.playPauseCamera('pause');
                this.backing.addEventListener('ui-mousemove',mousemove);
            });
            this.el.sceneEl.addEventListener('mouseup',()=>{
                this.backing.removeEventListener('ui-mousemove',mousemove);
                this.isMoving = false;
                this.setSelection(this.text.selectionStart,this.text.selectionLength)
            });
            this.el.setAttribute('visible',false);
            setTimeout(()=>{
                this.setValue();
                this.el.setAttribute('visible',true);
                this.setScrollClips();
            },150);
        });
        this.el.getValue = this.getValue.bind(this);
        this.el.value = this.value.bind(this);
        this.el.focus = this.focus.bind(this);
    },
    setupScrollClips(){
        this.content_clips = [
            new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), 0 ),
            new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 )
        ];
        //this.setScrollClips();
    },
    selectAll(){
        this.text.selectionStart = 0;
        this.text.selectionLength = this.chars.length;
        this.setValue();
    },
    increaseWrap(){
        let child = this.text.object3D.children[this.text.object3D.children.length-1];
        if(!child)return;
        if(child.geometry.layout._linesTotal>1){
            this.text.setAttribute('width',this.text.getAttribute('width')*1.2);
            this.text.setAttribute('wrap-pixels',this.text.getAttribute('width')*500);
            this.text.setAttribute('x-offset',((this.text.getAttribute('width')-this.data.width)/2));
            this.increaseWrap();
        }
    },
    setScrollClips(){
        //this.text.object3D.updateMatrixWorld();
        //this.backing.object3D.parent.updateMatrixWorld();
        this.content_clips[0].set(new THREE.Vector3( -1, 0, 0 ), (this.data.width/2)+0.005);
        this.content_clips[1].set(new THREE.Vector3( 1, 0, 0 ), (this.data.width/2)+0.005);
        this.content_clips[0].applyMatrix4(this.backing.object3D.matrixWorld);
        this.content_clips[1].applyMatrix4(this.backing.object3D.matrixWorld);
        setTimeout(()=>{
            let child = this.text.object3D.children[this.text.object3D.children.length-1];
            if(child)child.material.clippingPlanes = this.text._content_clips?this.text._content_clips.concat(this.content_clips):this.content_clips;
        },0);
        let selectionHeight = this.selectionHighlight.getObject3D('mesh');
        if(selectionHeight){
            selectionHeight.material.clippingPlanes = this.text._content_clips?this.text._content_clips.concat(this.content_clips):this.content_clips;
        }
        let carret = this.carret.getObject3D('mesh');
        if(carret){
            carret.material.clipShadows = true;
            carret.material.needsUpdate = true;
            carret.material.clippingPlanes = this.text._content_clips?this.text._content_clips.concat(this.content_clips):this.content_clips;
        }
    },
    numberOnly(e,is_float){
        // Stolen from stack overflow.
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return true;
        }
        // Regex to allow float/int input - float inpit allows "0." for as you type numbers - need to remove on blur.
        // TODO: Need to remove trailing dot on blur to make a valid number.
        let output = this.getValue();
        if(e){
            return ((is_float?/^\d*((\.)|(\.\d+))?$/g:/^\d*?$/g).test(output+e.key));
        }

    },
    floatOnly(e){
        return this.numberOnly(e,true);
    },
    focus(){
        if(this.isFocused)return;
        this.isFocused = true;
        this.setupCarret();
        this.setValue();
        this.setScrollClips();
        setTimeout(()=>this.el.sceneEl.addEventListener('mousedown',this.blurHandler),50);
        window.addEventListener('keydown', this.keydown);
        this.underline.setAttribute('height',0.008);
        this.underline.setAttribute('color','#009688');
    },
    blur(){
        this.isFocused = false;
        clearInterval(this.carretInterval)
        this.carret.getObject3D('mesh').material.opacity = 0;
        this.el.sceneEl.removeEventListener('mousedown',this.blurHandler);
        this.playPauseCamera('play');
        window.removeEventListener('keydown', this.keydown);
        UI.utils.stoppedChanging(this.text.object3D.uuid);
        this.underline.setAttribute('height',0.005);
        this.underline.setAttribute('color','#bfbfbf');
        if(this.chars.length&&this.chars[this.chars.length-1].char==='.'&&this.data.type==="number"){
            this.chars.pop();
            this.setValue();
        }
    },
    handleKeyboardEvent(e){
        if(e.keyCode===88&&e.ctrlKey) { //CTRL + X
            // let selection = window.getSelection();
            // selection.removeAllRanges();
            //
            // let textNode = document.createTextNode('lol')
            // document.body.appendChild(textNode)
            //
            // let range = document.createRange();
            // range.setStart(textNode, 1);
            // range.setEnd(textNode, 3);
            //
            // selection.addRange(range)
            //
            // document.execCommand('copy')
            //
            // document.body.removeChild(textNode)
            // TODO: Clipboard API?? - https://stackoverflow.com/questions/6413036/get-current-clipboard-content


            // const modifyCopy = e => {
            //     console.log('copy executed!')
            //     e.clipboardData.setData('text/plain', 'Please don\'t copy our work!');
            //     e.preventDefault();
            // };
            //
            // document.addEventListener('copy', modifyCopy);
        }if(e.keyCode===67&&e.ctrlKey) { //CTRL + C

        }else if(e.keyCode===86&&e.ctrlKey) { //CTRL + V

        }else if(e.keyCode===65&&e.ctrlKey) { //CTRL + A
            this.text.selectionStart = 0;
            this.text.selectionLength = this.chars.length;
        }else if(e.code.indexOf('Key')>-1||e.code.indexOf('Digit')>-1||this.charsAllowed.indexOf(e.key)>-1){
            let check = true;
            switch(this.data.type){
                case "number":
                    check = this.floatOnly(e);
                    break;
                case "int":
                    console.log(this.numberOnly(e));
                    check = this.numberOnly(e);
                    break;
            }
            if(check){
                this.chars.splice(this.text.selectionStart,this.text.selectionLength,{char:e.key});
                this.text.selectionStart++;
                this.text.selectionLength = 0;
            }
        }else if(e.keyCode===46){// Delete
            this.chars.splice(this.text.selectionStart,this.text.selectionLength||1);
            this.text.selectionStart = this.text.selectionStart>this.chars.length?this.chars.length:this.text.selectionStart;
            this.text.selectionLength = 0;
        }else if(e.keyCode===39){
            if(!e.shiftKey){
                if(this.text.selectionLength){
                    this.text.selectionStart+=this.text.selectionLength;
                }else{
                    this.text.selectionStart++;
                }
                this.text.selectionLength = 0;
                if(this.text.selectionStart>this.chars.length)this.text.selectionStart = this.chars.length;
                delete this.shiftStartPos
            }else{
                if(!this.shiftStartPos){
                    this.shiftStartPos = this.text.selectionStart;
                }
                if(this.text.selectionStart<this.shiftStartPos){
                    this.text.selectionStart++;
                    this.text.selectionLength=Math.abs(this.shiftStartPos-this.text.selectionStart);
                }else{
                    this.text.selectionLength++;
                }

            }
        }else if(e.keyCode===37){
            if(!e.shiftKey) {
                if (!this.text.selectionLength) {
                    this.text.selectionStart--;
                }
                this.text.selectionLength = 0;
                if (this.text.selectionStart < 0) this.text.selectionStart = 0;
                delete this.shiftStartPos
            }else{
                if(!this.shiftStartPos){
                    this.shiftStartPos = this.text.selectionStart;
                }
                if(this.text.selectionStart+this.text.selectionLength>this.shiftStartPos){
                    this.text.selectionLength--;
                }else{
                    this.text.selectionStart--;
                    this.text.selectionLength=Math.abs(this.shiftStartPos-this.text.selectionStart);
                }
            }
        }else{
            if(this.text.selectionLength) {
                if(e.keyCode===8) {// Backspace
                    this.chars.splice(this.text.selectionStart, this.text.selectionLength  );
                    this.text.selectionLength = 0;
                }
            }else{
                if(e.keyCode===8){// Backspace
                    if(this.text.selectionStart){
                        this.chars.splice(this.text.selectionStart-1,this.text.selectionLength||1 );
                        this.text.selectionStart = this.text.selectionStart-1;
                    }
                }else if(e.keyCode===32){ // Space
                    this.chars.splice(this.text.selectionStart,0,{char:' '});
                    this.text.selectionStart++;
                }
            }

        }
        this.el.emit('ui-keypress',e);
        this.setValue();
        this.carret.getObject3D('mesh').material.opacity = 1;
        e.preventDefault();
        e.stopPropagation();
    },
    setValue(){
        this.setScrolledValue();
        this.setCharacters();
        this.setSelection(this.text.selectionStart,this.text.selectionLength);
        this.increaseWrap();
    },
    setScrolledValue(){
        let output = this.getValue();
        this.text.setAttribute('value',output);
        if(!this.chars.length){
            this.text.setAttribute('color','#bfbfbf');
            this.text.setAttribute('value',this.data.placeHolder);
        }else{
            this.text.setAttribute('value',output);
            this.text.setAttribute('color','#2f2f2f');
        }
    },
    onMousemove(e){
        let currentSelection = this.getSelectionPosition(e);
        if(!this.isMoving){
            this.isMoving = true;
            this.startSelection = currentSelection;
        }
        let selection = this.getNearestGlyph(this.startSelection,currentSelection);
        this.selectionHighlight.setAttribute('scale',(selection.end-selection.start)+' 1 1');
        this.selectionHighlight.setAttribute('position',(selection.start+((selection.end-selection.start)/2))+' 0 0.001');
        this.carret.setAttribute('position',selection.end+' 0 0.001');

    },
    setupElements(){


        this.container = document.createElement('a-entity');
        this.container.setAttribute('position',(this.data.width/2)+' 0 0');

        this.text = document.createElement('a-text');
        this.text.setAttribute('color','#2f2f2f');
        this.text.setAttribute('anchor','center');
        this.text.setAttribute('align','left');
        this.text.setAttribute('width',this.data.width);
        this.text.setAttribute('wrap-pixels',this.data.width*500);
        this.text.className = 'no-yoga-layout';
        this.text.setAttribute('height',this.data.height);
        this.text.setAttribute('value',this.data.value);
        this.container.appendChild(this.text);

        this.selectionHighlight = document.createElement('a-plane');
        this.selectionHighlight.setAttribute('width',1);
        this.selectionHighlight.setAttribute('scale','0 1 1');
        this.selectionHighlight.setAttribute('height',0.16);
        this.selectionHighlight.setAttribute('transparent',true);
        this.selectionHighlight.className = 'no-yoga-layout';
        this.selectionHighlight.setAttribute('color','#009688');
        this.selectionHighlight.setAttribute('shader','flat');
        this.selectionHighlight.setAttribute('opacity',0.3);
        this.selectionHighlight.setAttribute('position','0 0 0.001');
        this.text.appendChild(this.selectionHighlight);

        this.carret = document.createElement('a-plane');
        this.carret.setAttribute('width',0.01);
        this.carret.setAttribute('height',0.12);
        this.carret.setAttribute('transparent',true);
        this.carret.setAttribute('opacity',0);
        this.carret.setAttribute('shader','flat');
        this.carret.className = 'no-yoga-layout';
        this.carret.setAttribute('color','#009688');
        this.carret.setAttribute('position',-(this.data.width/2)+' 0 0.001');
        this.text.appendChild(this.carret);


        this.backing = document.createElement('a-plane');
        this.backing.className = 'intersectable no-yoga-layout';
        this.backing.setAttribute('width',this.data.width+0.1);
        this.backing.setAttribute('height',this.data.height);
        this.backing.setAttribute('color',this.data.backgroundColor);
        this.backing.setAttribute('shader','flat');
        this.container.appendChild(this.backing);



        this.underline = document.createElement('a-plane');
        this.underline.setAttribute('width',this.data.width);
        this.underline.setAttribute('height',0.005);
        this.underline.className = 'no-yoga-layout';
        this.underline.setAttribute('shader','flat');
        this.underline.setAttribute('color','#bfbfbf');
        this.underline.setAttribute('position','0 -0.072 0.001');
        this.container.appendChild(this.underline);

        this.el.appendChild(this.container);


    },
    setupCarret(){
        let material = this.carret.getObject3D('mesh').material;
        this.carretInterval = setInterval(()=>{
            material.opacity = material.opacity?0:1;
            UI.utils.isChanging(this.el.sceneEl,this.text.object3D.uuid);
        },350);
    },
    value(text){
        if(text||text===""){
            this.chars = text.split('').map(char=>({char:char}))
            this.setValue();
            // set value
        }else{
            return this.chars.map(c=>c.char).join('');
        }
    },
    getValue(){
        let output = '';
        for(let i = 0; i < this.chars.length; i++){
            output+=this.data.type==="password"?'*':this.chars[i].char;
        }
        return output;
    },
    getSelectionPosition(e){
        this.el.object3D.updateMatrixWorld();
        return this.text.object3D.worldToLocal(e.detail.intersection.point.clone()).x
    },
    playPauseCamera(method){
        let el = this.data.cameraEl;
        if (el&&el.components[this.data.lookControlsComponent]) {
            el.components[this.data.lookControlsComponent][method]();
        }

        if(this.data.rigEl){
            el = this.data.rigEl
        }

        if(el&&el.components[this.data.wasdControlsComponent]) {
            el.components[this.data.wasdControlsComponent][method]();
        }
    },
    setCharacters(){
        this.positions = [];
        let child = this.text.object3D.children[this.text.object3D.children.length-1];
        if(!this.chars.length||!child)return;
        let glyphs = child.geometry.layout.glyphs;
        let scale = child.scale.x;
        let lastPosition = 0;
        for(let i = 0; i < glyphs.length; i++){
            let glyph = glyphs[i];
            let currentWidth = (this.chars[i].char===' '?20:glyph.data.width);
            let current = (((glyph.position[0]+currentWidth+glyph.position[1])*scale)+0.08);
            if(i===0){
                lastPosition = (((glyph.position[0]+glyph.position[1])*scale)+0.08)
            }
            if(!this.chars[i].id){
                this.chars[i].id=glyph.data.id;
                this.chars[i].width = current-lastPosition;
            }
            this.chars[i].left = lastPosition;
            lastPosition = current;
        }
    },
    getNearestGlyph(startPosition,endPosition){
        let width = Number(this.text.getAttribute('width'));
        let parentWidth = this.data.width;
        if(endPosition<startPosition){
            let tempPosition = endPosition;
            endPosition = startPosition;
            startPosition = tempPosition;
        }
        if(startPosition<-parentWidth/2){
            startPosition = -parentWidth/2;
        }
        if(endPosition>width-parentWidth/2){
            endPosition = width-parentWidth/2;
        }
        let startDiff = Number.POSITIVE_INFINITY;
        let endDiff = Number.POSITIVE_INFINITY;
        let output = {start:0,end:0};
        if(this.chars.length){
            for(let i = 0; i <= this.chars.length; i++){
                let position = this.chars[i===this.chars.length?i-1:i];
                let currentPosition = (i===this.chars.length?position.left+position.width:position.left)-(parentWidth)/2;
                if(Math.abs(startPosition-currentPosition)<startDiff){
                    startDiff = Math.abs(startPosition-currentPosition);
                    output.start = currentPosition;
                    this.text.selectionStart = i;
                }
                if(Math.abs(endPosition-currentPosition)<endDiff){
                    endDiff = Math.abs(endPosition-currentPosition);
                    output.end = currentPosition;
                    this.text.selectionLength = i-this.text.selectionStart;
                }
            }
        }
        return output;
    },
    setSelection(start,length){
        this.text.selectionStart = start;
        this.text.selectionLength = length;
        let right = 0,left = 0;
        for(let i = 0; i < this.chars.length; i++){
            let position = this.chars[i];
            if(i>=start&&i<start+length+1){
                let current = position.left;
                if(i===start){
                    left = current
                }
                right = current;
            }
        }
        let end = this.chars.length?this.chars[this.chars.length-1].left+this.chars[this.chars.length-1].width:0;
        if(start+length===this.chars.length){
            right = end
        }
        if(start===this.chars.length){
            left = right = end
        }
        let parentWidth = this.data.width;
        this.selectionHighlight.setAttribute('scale',(right-left)+' 1 1');
        this.selectionHighlight.setAttribute('position',(left+((right-left)/2)-((parentWidth)/2))+' 0 0.001')
        let carretPosition = (right-((parentWidth)/2));
        this.carret.setAttribute('position',carretPosition+' 0 0.001');

        if(carretPosition>(parentWidth/2)-this.scrollOffset){
            this.scrollOffset = -(carretPosition-(parentWidth/2));
            this.text.setAttribute('position',this.scrollOffset+' 0 0');
        }

        if((carretPosition+parentWidth/2)<-this.scrollOffset){
            this.scrollOffset+=(-this.scrollOffset-(carretPosition+parentWidth/2));
            if(this.scrollOffset>0)this.scrollOffset=0;
            this.text.setAttribute('position',this.scrollOffset+' 0 0');
        }
    },
    updateSchema() {
    }
});
//

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN */
/**
 * Button base Component for aframe-material-collection. This is used as the base component for all the button primitives.
 * @namespace aframe-material-collection
 * @component ui-btn
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-btn', {
    schema:{
        duration:{type:'int',default:250},
        hoverHeight:{type:'number',default:0.01},
        activeHeight:{type:'number',default:-0.001},
        disabled:{type:'boolean',default:false}
    },
    updateSchema(){
      // TODO: handle updates to the button state, disabled flag here.
    },
    init() {
        // Store the current button z value for animating mouse events
        this.defaultZ = this.el.object3D.position.z;
        // register input events for interaction
        if(!this.data.disabled){
            this.el.addEventListener('mouseenter', e=>this.mouseEnter(e));
            this.el.addEventListener('mousedown', e=>this.mouseDown(e));
            this.el.addEventListener('mouseup', e=>this.mouseUp(e));
            this.el.addEventListener('mouseleave', e=>this.mouseLeave(e));
        }
    },
    mouseEnter(e){
        const _this = this;
        // Lift the button up for hover animation
        this.tween(this.defaultZ,this.defaultZ+this.data.hoverHeight,function(){
            _this.el.object3D.position.z = this.x;
        },function(){
            _this.el.object3D.position.z = _this.defaultZ+_this.data.hoverHeight;
        });
        //UI.utils.preventDefault(e)
    },
    mouseLeave(e){
        // Ignore mouse leave event if the button was clicked - mouse up already resets to default state.
        if(this.is_clicked){
            return this.is_clicked = false;
        }
        // Reset button state from hover
        this.resetAnimation(this.defaultZ+this.data.hoverHeight);
        //UI.utils.preventDefault(e)
    },
    mouseUp(e){
        this.is_clicked = true;
        // Reset button state from pressed
        this.resetAnimation(this.defaultZ+this.data.activeHeight);
        UI.utils.preventDefault(e)
    },
    mouseDown(e){
        const _this = this;
        // Press state animation from hovered
        this.tween(this.defaultZ+this.data.hoverHeight,this.defaultZ+this.data.activeHeight,function(){
            _this.el.object3D.position.z = this.x;
        },function(){
            _this.el.object3D.position.z = _this.defaultZ+_this.data.activeHeight;
        });
        UI.utils.preventDefault(e)
    },
    resetAnimation(start_z){
        let _this = this;
        this.tween(start_z,this.defaultZ,function(){
            _this.el.object3D.position.z = this.x;
        },function(){
            _this.el.object3D.position.z = _this.defaultZ;
        })
    },
    tween(from,to,callback,complete){
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
        return new TWEEN.Tween({x:from})
            .to({ x: to}, this.data.duration)
            .onUpdate(callback)
            .onComplete(function(){
                // Stop changes
                UI.utils.stoppedChanging(_this.el.object3D.uuid)
                return complete.call(this);
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Slider Component for aframe-material-collection. Includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-slider
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-slider', {
    schema: {
        value: {type:'number',default: 0},
        disabled:{type:'boolean',default: false},
        progressColor:{default:'#4db6ac'},
        handleColor:{default:'#009688'},
        handleDisabledColor:{default:'#afafaf'},
        railColor:{default:'#fff'},
        handleZIndex:{type:'number',default:0.001},
        intersectableClass: {default: 'intersectable'},
        width:{type:'number',default: 0.5},
        height:{type:'number',default: 0.1},
        lookControlsComponent:{default:'look-controls'},
        handleRadius:{type:'number',default:0.055},
        scrollZOffset:{type:'number',default:0},
        cameraEl:{type:'selector'},
    },
    getValue(){
        return this.scroll_perc;
    },
    init(){
        this.scroll_perc = this.data.value;
        this.width = this.data.width;
        this.height = this.data.height;
        // Setup background with mouse input to catch mouse move events when not exactly over the scroll bar.
        this.backgroundPanel = document.createElement('a-plane');
        this.backgroundPanel.setAttribute('class','no-yoga-layout background '+this.data.intersectableClass);
        this.backgroundPanel.setAttribute('width',this.data.width+0.01);
        this.backgroundPanel.setAttribute('height',this.data.height+0.01);
        this.backgroundPanel.setAttribute('position','0 0 -0.3');
        this.backgroundPanel.setAttribute('opacity',0.0001);//
        this.backgroundPanel.setAttribute('transparent',true);
          
        this.el.appendChild(this.backgroundPanel);
        // Setup handle circle entity.
        this.handleEl = document.createElement('a-circle');
        this.handleEl.setAttribute('radius',this.data.handleRadius);
        this.handleEl.setAttribute('color',this.data.handleColor);
        this.handleEl.setAttribute('shader','flat');
        this.handleEl.setAttribute('ui-ripple','size:0.1 0.1;color:#999;fadeDelay:300;duration:500');
        this.handleEl.setAttribute('class',this.data.intersectableClass+' no-yoga-layout');
        this.handleEl.setAttribute('position',((-(this.data.width)/2)+this.data.handleRadius)+' 0 '+this.data.handleZIndex);
        this.handleEl.setAttribute('segments',6);
        this.el.appendChild(this.handleEl);

        // Setup rail entity.
        this.railEl = document.createElement('a-plane');
        this.railEl.setAttribute('width',(this.data.width-0.1));
        this.railEl.setAttribute('height','0.05');
        this.railEl.setAttribute('shader','flat');
        this.railEl.setAttribute('ui-rounded','borderRadius:0.025');
        this.railEl.setAttribute('color',this.data.railColor);
        this.railEl.setAttribute('class',this.data.intersectableClass+' no-yoga-layout');
        this.el.appendChild(this.railEl);
        // Wait for the rounded edge on the rail to load to clone the geometry for the
        // selected progress bar part of the rail
        this.railEl.addEventListener('rounded-loaded',()=>{
            this.getRailObject(this.railEl.object3D);
            this.slide(this.scroll_perc,true);
        });
        // Pause/play camera look controls
        const playPauseCamera = method=>{
            if(this.data.cameraEl) {
                let lookControls = this.data.cameraEl.components[this.data.lookControlsComponent];
                if(lookControls){
                    lookControls[method]();
                }
            }
        };
        // Setup mouse move handler for scrolling and updating scroll handle.
        const mousemove = e=>this.mouseMove(e);
        // Start scroll
        this.handleEl.addEventListener('mousedown',e=>{
            // Pause look controls to allow scrolling
            playPauseCamera('pause');
            this.isDragging = true;
            // Store the start point offset
            this.el.emit('slide-start',this.scroll_perc);
            this.handlePos = this.handleEl.object3D.worldToLocal(e.detail.intersection?e.detail.intersection.point:e.relatedTarget.object3D.position).x;
            this.backgroundPanel.addEventListener('ui-mousemove',mousemove);
            // Start changes
            UI.utils.isChanging(this.el.sceneEl,this.handleEl.object3D.uuid);
            // Prevent default behaviour of event
            UI.utils.preventDefault(e);
        });
        // End scroll
        const endScroll = e=>{
            if(this.isDragging){
                this.backgroundPanel.removeEventListener('ui-mousemove',mousemove);
                // Play look controls once scrolling is finished
                playPauseCamera('play');
                this.isDragging = false;
                // Stop changes
                this.el.emit('slide-end',this.scroll_perc);
                UI.utils.stoppedChanging(this.handleEl.object3D.uuid);
                // Prevent default behaviour of event
                UI.utils.preventDefault(e);
            }
        };
        this.backgroundPanel.addEventListener('mouseup',endScroll);
        this.backgroundPanel.addEventListener('mouseleave',endScroll);
        // // Handle clicks on rail to scroll
        this.railEl.addEventListener('mousedown',e=>{

            UI.utils.isChanging(this.el.sceneEl,this.handleEl.object3D.uuid);
            // Pause look controls
            this.isDragging = true;
            // Reset handle pos to center of handle
            this.handlePos = 0;
            // Scroll immediately and register mouse move events.
            this.slide(this.railEl.object3D.worldToLocal(e.detail.intersection?e.detail.intersection.point:e.relatedTarget.object3D.position).x);
            this.backgroundPanel.addEventListener('ui-mousemove',mousemove);
            this.el.emit('slide-end',this.scroll_perc);
            // Prevent default behaviour of event
            UI.utils.preventDefault(e);
        });
        this.el.slide = this.slide.bind(this);
        this.el.getValue = this.getValue.bind(this);
        this.el.railEl = this.railEl;
    },
    slide(positionX,isPerc){
        let min = (-(this.data.width)/2)+this.data.handleRadius;
        let max = ((this.data.width)/2)-this.data.handleRadius;
        // Set scroll position with start point offset.
        let scroll_pos = isPerc?(min+((max-min)*positionX)):THREE.Math.clamp(positionX,min,max);
        this.scroll_perc = isPerc?positionX:((scroll_pos-min)/(max-min));
        this.el.emit('slide',this.scroll_perc);
        this.progress.scale.set(this.scroll_perc||0.0001,1,1);
        this.progress.position.set((-(this.data.width-this.data.handleRadius)/2)+(this.scroll_perc*((this.data.width-this.data.handleRadius)/2)),0,0.0001);
        this.handleEl.setAttribute('position',/*((this.data.width/2)+this.data.scrollPadding)+' '+*/scroll_pos+' 0 '+(this.data.scrollZOffset+0.0005));
    },
    mouseMove(e){
        if(this.isDragging){
            let pos = this.railEl.object3D.worldToLocal(e.detail.intersection.point);
            this.slide(pos.x-this.handlePos+this.data.handleRadius);
        }
    },
    getRailObject(object){
        // Get the rounded shape geomtery.
        object.traverse(child=>{
            if(child.geometry&&child.geometry.type==="ShapeBufferGeometry"){
                this.progress = new THREE.Mesh(child.geometry.clone(),new THREE.MeshBasicMaterial({color:this.data.progressColor}));
                this.progress.position.set(-this.data.width/2,0,0.0001);
                this.progress.scale.set(0.00001,1,1);
                this.el.object3D.add(this.progress);
            }
        });
    },
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * NUmber widget Component for aframe-material-collection. Includes up/down buttons
 * @namespace aframe-material-collection
 * @component ui-number
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-number', {
    schema: {
        value: {type: 'number', default: 0},
        increment: {type: 'number', default: 0.001},
        width:{type: 'number',default: 0.65},
        height:{type: 'number',default: 0.2},
        intersectableClass: {default: 'intersectable'},
    },
    init(){
        this.setupElements();
    },
    setupElements(){
        let numberText = document.createElement('a-plane');
        numberText.setAttribute('width',"0.55");
        numberText.setAttribute('height',"0.2");
        numberText.className = 'no-yoga-layout';
        numberText.setAttribute('color',"#212121");
        numberText.setAttribute('text',"value:"+this.data.value.toFixed(3)+";color:#212121;wrapCount:12;align:center");
        numberText.setAttribute('ui-border',"borderRadius:0.1;borderWidth:0.008");

        let upButton = document.createElement('a-ui-fab-button-small');
        upButton.setAttribute('scale','0.75 0.75 0.75');
        upButton.className = 'no-yoga-layout '+this.data.intersectableClass;
        upButton.setAttribute('color','#009688');
        upButton.setAttribute('position','0.33 0.055 0.001');
        upButton.setAttribute('color','#009688');
        upButton.setAttribute('icon-color','#fff');
        upButton.setAttribute('ripple-color','#009688');
        upButton.setAttribute('src','https://cdn.theexpanse.app/images/icons/baseline_keyboard_arrow_up_white_18dp.png');
        upButton.addEventListener('click',()=>{
            this.data.value+=this.data.increment;
            numberText.setAttribute('text',"value:"+(this.data.value).toFixed(3)+";color:#212121;wrapCount:12;align:center");
            this.el.emit('change',this.data.value);
        });
        let downButton = document.createElement('a-ui-fab-button-small');
        downButton.setAttribute('scale','0.75 0.75 0.75');
        downButton.className = 'no-yoga-layout '+this.data.intersectableClass;
        downButton.setAttribute('color','#009688');
        downButton.setAttribute('position','0.33 -0.055 0.001');
        downButton.setAttribute('color','#009688');
        downButton.setAttribute('icon-color','#fff');
        downButton.setAttribute('ripple-color','#009688');
        downButton.setAttribute('src','https://cdn.theexpanse.app/images/icons/down_arrow.png');
        downButton.addEventListener('click',()=>{
            this.data.value-=this.data.increment;
            numberText.setAttribute('text',"value:"+(this.data.value).toFixed(3)+";color:#212121;wrapCount:12;align:center");
            this.el.emit('change',this.data.value);
        });
        numberText.appendChild(upButton);
        numberText.appendChild(downButton);
        this.el.appendChild(numberText);
    }
});

/*
<a-plane class="zInput" width="0.55" ui-border="borderRadius:0.1;borderWidth:0.008" height="0.2" color="#212121" text="value:{{to-fixed vector.z 3}};color:#212121;wrapCount:12;align:center">
        <a-ui-fab-button-small scale="0.75 0.75 0.75" class="zInputUp intersectable no-yoga-layout" color="#009688" position="0.33 0.055 0.001" icon-color="#fff" ripple-color="#009688" src="https://cdn.theexpanse.app/images/icons/baseline_keyboard_arrow_up_white_18dp.png"></a-ui-fab-button-small>
        <a-ui-fab-button-small scale="0.75 0.75 0.75" class="zInputDown intersectable no-yoga-layout" color="#009688" position="0.33 -0.055 0.001" icon-color="#fff" ripple-color="#009688" src="https://cdn.theexpanse.app/images/icons/down_arrow.png"></a-ui-fab-button-small>
    </a-plane>
 */

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Switch Component for aframe-material-collection. Includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-switch
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-switch', {
    schema: {
        value: {type:'boolean',default: false},
        disabled:{type:'boolean',default: false},
        progressColor:{default:'#4db6ac'},
        handleColor:{default:'#009688'},
        handleDisabledColor:{default:'#afafaf'},
        railColor:{default:'#fff'},
        switchDuration:{type:'int',default: 350},
        handleZIndex:{type:'number',default:0.01},
        intersectableClass: {default: 'intersectable'},
        width:{type:'number',default: 0.3},
        height:{type:'number',default: 0.1},
    },
    updateSchema(){
        if(this.data){
            if(this.data.disabled){
                if(this.data.value){
                    this.data.value=false;
                    this.click();
                }
            }else{
                this.click();
            }
            this.setDisabled();
        }
    },
    init() {
        this.width = 0.3;
        this.height = 0.1;
        // Setup handle circle entity.
        this.handleEl = document.createElement('a-circle');
        this.handleEl.setAttribute('radius',0.055);
        this.handleEl.setAttribute('color',this.data.handleColor);
        this.handleEl.setAttribute('shader','flat');
        this.handleEl.setAttribute('ui-ripple','size:0.1 0.1;color:#999;fadeDelay:300;duration:500');
        this.handleEl.setAttribute('class',this.data.intersectableClass+' no-yoga-layout');
        this.handleEl.setAttribute('position','-0.05 0 '+this.data.handleZIndex);
        this.handleEl.setAttribute('segments',6);
        this.el.appendChild(this.handleEl);

        // Setup rail entity.
        this.railEl = document.createElement('a-plane');
        this.railEl.setAttribute('width','0.15');
        this.railEl.setAttribute('height','0.05');
        this.railEl.setAttribute('shader','flat');
        this.railEl.setAttribute('ui-rounded','borderRadius:0.025');
        this.railEl.setAttribute('color',this.data.railColor);
        this.railEl.setAttribute('class',this.data.intersectableClass+' no-yoga-layout');
        this.el.appendChild(this.railEl);
        // Wait for the rounded edge on the rail to load to clone the geometry for the
        // selected progress bar part of the rail
        this.railEl.addEventListener('rounded-loaded',()=>{
            this.getRailObject(this.railEl.object3D);
            this.setDisabled();
            this.click();
        });
        this.clickHandler = e=>{
            this.data.value = !this.data.value;
            this.click();
            // Prevent default behaviour of event
            if(e.detail.preventDefault){
                e.detail.preventDefault();
            }
        };
    },
    setDisabled(){
        // Add / Remove click handlers based on disabled state.
        if(this.data.disabled){
            this.handleEl.removeEventListener('mousedown',this.clickHandler);
            this.handleEl.setAttribute('color',this.data.handleDisabledColor);
        }else{
            this.handleEl.addEventListener('mousedown',this.clickHandler);
            this.handleEl.setAttribute('color',this.data.handleColor);
        }
    },
    click(){
        // Emit the current selected value
        this.el.emit('ui-switch-changed',this.data.value);
        // Animate the switch handle and the progress bar.
        this.tweenHandle();
        this.tweenProgress();
    },
    getRailObject(object){
        // Get the rounded shape geomtery.
        object.traverse(child=>{
            if(child.geometry&&child.geometry.type==="ShapeBufferGeometry"){
                this.progress = new THREE.Mesh(child.geometry.clone(),new THREE.MeshBasicMaterial({color:this.data.progressColor}));
                this.progress.position.set(-0.075,0,0.001);
                this.progress.scale.set(0.00001,1,1);
                this.el.object3D.add(this.progress);
            }
        });
    },
    tweenProgress(){
        if(this.progress){
            new TWEEN.Tween(this.progress.position)
                .to(new THREE.Vector3(this.data.value?0:-0.075,0,0.001), this.data.switchDuration)
                .easing(TWEEN.Easing.Exponential.Out).start();
            new TWEEN.Tween(this.progress.scale)
                .to(new THREE.Vector3(this.data.value?1:0.00001,1,1), this.data.switchDuration)
                .easing(TWEEN.Easing.Exponential.Out).start();
        }
    },
    tweenHandle(){
        if(this.handleEl){
            // Start changes
            UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
            new TWEEN.Tween(this.handleEl.object3D.position)
                .to(new THREE.Vector3(this.data.value?0.05:-0.05,0,this.data.handleZIndex), this.data.switchDuration)
                .onComplete(()=>{
                    // Stop changes
                    UI.utils.stoppedChanging(this.el.object3D.uuid);
                })
                .easing(TWEEN.Easing.Exponential.Out).start();
        }
    }
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Toast Component for aframe-material-collection.
 * @namespace aframe-material-collection
 * @component ui-toast
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-toast', {
    schema: {
        toastEl:{type:'selector'},
        message:{default:'Hello from toast!'}
    },
    init() {
        this.originalPosition = this.data.toastEl.getAttribute('position').clone();
        this.el.addEventListener('mousedown',()=>{
            if(this.closeTween)this.closeTween.stop();
            UI.utils.isChanging(this.el.sceneEl,this.data.toastEl.object3D.uuid);
            this.data.toastEl.setAttribute('visible',true);
            this.data.toastEl.setAttribute('text-value',UI.utils.shorten(this.data.message,85));
            let _this = this;
            new TWEEN.Tween({x:this.originalPosition.x,y:this.originalPosition.y-0.1,z:this.originalPosition.z})
                .to(this.originalPosition, 350)
                .onUpdate(function(){
                    _this.data.toastEl.setAttribute('position',this);
                })
                .onComplete(()=>{
                    // Stop changes
                    this.closeTween = new TWEEN.Tween({x:0.8})
                        .delay(2000)
                        .to({x:0.0001}, 350)
                        .onUpdate(function(){
                            _this.data.toastEl.setAttribute('opacity',this.x);
                        })
                        .onComplete(()=>{
                            this.data.toastEl.setAttribute('visible',false);
                            UI.utils.stoppedChanging(this.data.toastEl.object3D.uuid);
                        })
                        .easing(TWEEN.Easing.Exponential.Out).start();
                })
                .easing(TWEEN.Easing.Exponential.Out).start();
            new TWEEN.Tween({x:0.0001})
                .to({x:0.8}, 350)
                .onUpdate(function(){
                    _this.data.toastEl.setAttribute('opacity',this.x);
                })
                .easing(TWEEN.Easing.Exponential.Out).start();
        });
    }
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Scroll Pane for aframe-material-collection. Expects
 * @namespace aframe-material-collection
 * @component ui-scroll-pane
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-scroll-pane', {
    schema: {
        height:{type:'number',default:1.2},
        width:{type:'number',default:2.9},
        scrollPadding:{type:'number',default:0.05},
        scrollZOffset:{type:'number',default:0},
        scrollHandleColor:{default:'#009688'},
        intersectableClass:{default:'intersectable'},
        cameraEl:{type:'selector'},
        lookControlsComponent:{default:'look-controls'},
    },
    init() {
        // Setup scroll bar and panel backing.
        this.setupElements();
        // Grab content container.
        this.container = this.el.querySelector('.container');
        if(typeof this.container === 'undefined'){
            throw 'ui-scroll-pane needs an entity inside it with the class "container" - <a-entity class="container"></a-entity>';
        }
        // Setup scroll bar.
        this.scrollBarWidth = this.rail.getAttribute('width');
        this.container.setAttribute('position',(-this.data.width/2)+' '+((this.data.height/2))+' 0');
        this.rail.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' 0 '+(this.data.scrollZOffset+0.0002));
        this.handle.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' 0 '+(this.data.scrollZOffset+0.0005));
        this.el.sceneEl.renderer.localClippingEnabled = true;

        // Setup content clips.
        this.content_clips = [
            new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), (this.data.height/2) ),
            new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), (this.data.height/2) ),
            new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), (this.data.width/2) ),
            new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), (this.data.width/2) )
        ];
        // Pause/play camera look controls
        const playPauseCamera = method=>{
            if(this.data.cameraEl) {
                let lookControls = this.data.cameraEl.components[this.data.lookControlsComponent];
                if(lookControls){
                    lookControls[method]();
                }
            }
        };
        // Setup mouse move handler for scrolling and updating scroll handle.
        const mousemove = e=>this.mouseMove(e);
        // Start scroll
        this.handle.addEventListener('mousedown',e=>{
            // Pause look controls to allow scrolling
            playPauseCamera('pause');
            this.isDragging = true;
            // Store the start point offset
            this.handlePos = this.handle.object3D.worldToLocal(e.detail.intersection.point).y;
            this.backgroundPanel.addEventListener('ui-mousemove',mousemove);
            // Start changes
            UI.utils.isChanging(this.el.sceneEl,this.handle.object3D.uuid);
            // Prevent default behaviour of event
            UI.utils.preventDefault(e);
        });
        // End scroll
        const endScroll = e=>{
            if(this.isDragging){
                this.backgroundPanel.removeEventListener('ui-mousemove',mousemove);
                // Play look controls once scrolling is finished
                playPauseCamera('play');
                this.isDragging = false;
                // Stop changes
                UI.utils.stoppedChanging(this.handle.object3D.uuid);
                // Prevent default behaviour of event
                UI.utils.preventDefault(e);
            }
        };
        this.backgroundPanel.addEventListener('mouseup',endScroll);
        this.backgroundPanel.addEventListener('mouseleave',endScroll);
        // // Handle clicks on rail to scroll
        this.rail.addEventListener('mousedown',e=>{

            UI.utils.isChanging(this.el.sceneEl,this.handle.object3D.uuid);
            // Pause look controls
            this.isDragging = true;
            // Reset handle pos to center of handle
            this.handlePos = 0;
            // Scroll immediately and register mouse move events.
            this.scroll(this.rail.object3D.worldToLocal(e.detail.intersection.point).y);
            this.backgroundPanel.addEventListener('ui-mousemove',mousemove);
            // Prevent default behaviour of event
            UI.utils.preventDefault(e);
        });

        // Setup content clips after the scene is loaded to be able to access all entity materials

        // update content clips world positions from this current element.

        this.updateContent();
        this.el.emit('scroll-pane-loaded');
        this.setupMouseWheelScroll();

        // Expose methods to the element to update/set the content of the scroll pane.
        this.el.setContent = this.setContent.bind(this);
        this.el.updateContent = this.updateContent.bind(this);
        this.el.scroll = this.scroll.bind(this);
    },
    updateContentClips(){
        this.el.sceneEl.object3D.updateMatrixWorld();
        // update content clips world positions from this current element.
        this.content_clips[0].set(new THREE.Vector3( 0, 1, 0 ), (this.data.height/2));
        this.content_clips[1].set(new THREE.Vector3( 0, -1, 0 ), (this.data.height/2));
        this.content_clips[2].set(new THREE.Vector3( -1, 0, 0 ), (this.data.width/2));
        this.content_clips[3].set(new THREE.Vector3( 1, 0, 0 ), (this.data.width/2));
        //this.el.sceneEl.object3D.updateMatrixWorld();
        this.content_clips[0].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[1].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[2].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[3].applyMatrix4(this.el.object3D.matrixWorld);

    },
    setContent(body,noAutoReload){
        if(this.container) {
            // Remove all children in the container and all yoga nodes
            while (this.container.firstChild) {
                let child = this.container.firstChild;
                if (this.container.yoga_node&&child.yoga_node) {
                    this.container.yoga_node.removeChild(child.yoga_node);
                }
                if(child.object3D){
                    UI.utils.clearObject(child.object3D);
                }
                this.container.removeChild(child);
                this.container.firstChild = null;
            }
            // Set the content in the scroll pane.
            return new Promise(resolve=>{
                let loadedWrapper = document.createElement('a-entity');
                loadedWrapper.setAttribute('visible',false);
                loadedWrapper.insertAdjacentHTML('afterbegin',body);
                loadedWrapper.addEventListener('loaded',e=>{
                    // Trigger an update to redraw scrollbars and fire change events.
                    if(!noAutoReload)this.updateContent();
                    resolve(loadedWrapper);
                    loadedWrapper.setAttribute('visible',true)
                });
                this.container.appendChild(loadedWrapper);
            })
        }
    },
    updateContent(should_not_scroll){
        this.updateContentClips();
        this.currentUuid = THREE.Math.generateUUID();
        UI.utils.isChanging(this.el.sceneEl,this.currentUuid);
        this.setChildClips();
        if(typeof Yoga !== 'undefined')this.initialiseYoga(this.container,this.data.width*100);
        this.container.yoga_node.calculateLayout(this.data.width*100, 'auto', Yoga.DIRECTION_LTR);
        this.content_height = Number.NEGATIVE_INFINITY;
        if(typeof Yoga !== 'undefined')this.updateYoga(this.container);

        this.handleSize = THREE.Math.clamp((this.data.height/this.content_height),0.1,1);
        this.handle.setAttribute('width',this.handleSize===1?0.00000001:0.1);
        this.rail.setAttribute('width',this.handleSize===1?0.00000001:0.1);
        this.rail.setAttribute('color',this.handleSize===1?'#efefef':'#fff');
        this.handle.setAttribute('height',this.data.height*this.handleSize);
        if(!should_not_scroll){
            this.container.object3D.position.y = this.data.height/2;
            this.handle.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' '+(this.data.height-(this.data.height*this.handleSize))/2+' '+(this.data.scrollZOffset+0.0005));
        }
    },
    mouseMove(e){
        if(this.isDragging){
            let pos = this.rail.object3D.worldToLocal(e.detail.intersection.point);
            this.scroll(pos.y-this.handlePos);
        }
    },
    scroll(positionY){
        let min = (-this.data.height/2)+(this.data.height*this.handleSize)/2;
        let max = (this.data.height/2)-(this.data.height*this.handleSize)/2;
        // Set scroll position with start point offset.
        let scroll_pos = THREE.Math.clamp(positionY,min,max);
        let scroll_perc = this.handleSize===1?0:1-((scroll_pos-min)/(max-min));
        this.container.object3D.position.y = ((this.content_height-this.data.height)*scroll_perc)+(this.data.height/2);
        this.handle.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' '+scroll_pos+' '+(this.data.scrollZOffset+0.0005));
    },
    setupMouseWheelScroll(){
        this.backgroundPanel.addEventListener('ui-mousewheel',e=>{
            if(this.handleSize!==1){
                // Start changes
                UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
                this.scroll(this.handle.getAttribute('position').y+(e.detail.evt.deltaY<0?0.1:-0.1));
                // Stop changes
                UI.utils.stoppedChanging(this.el.object3D.uuid);
                UI.utils.preventDefault(e);
            }
        });
    },
    setupElements(){
        // Setup background with mouse input to catch mouse move events when not exactly over the scroll bar.
        this.backgroundPanel = document.createElement('a-plane');
        this.backgroundPanel.setAttribute('class','background '+this.data.intersectableClass);
        this.backgroundPanel.setAttribute('width',this.data.width+1);
        this.backgroundPanel.setAttribute('height',this.data.height+1);
        this.backgroundPanel.setAttribute('position','0 0 -0.013');
        this.backgroundPanel.setAttribute('opacity',0.0001);//
        this.backgroundPanel.setAttribute('transparent',true);

        this.el.appendChild(this.backgroundPanel);

        // Add scroll bar rail.
        this.rail = document.createElement('a-plane');
        this.rail.setAttribute('class','rail '+this.data.intersectableClass);
        this.rail.setAttribute('width',0.1);
        this.rail.setAttribute('height',this.data.height);
        this.rail.setAttribute('shader','flat');
        this.el.appendChild(this.rail);

        // Add scroll bar handle.
        this.handle = document.createElement('a-plane');
        this.handle.setAttribute('class','handle '+this.data.intersectableClass);
        this.handle.setAttribute('width',0.1);
        this.handle.setAttribute('height',this.data.height);
        this.handle.setAttribute('color',this.data.scrollHandleColor);
        this.handle.setAttribute('shader','flat');
        this.el.appendChild(this.handle);
    },
    setupYogaNode(node,width,height,properties){
        // Parse yoga properties and call the yoga methods to setup this layout node.
        if(!properties.hasOwnProperty('setWidth'))node.setWidth(width);
        if(!properties.hasOwnProperty('setHeight'))node.setHeight(height);
        for(let method in properties){
            if(properties.hasOwnProperty(method)&&method.indexOf('Edge')===-1){
                if(["setMarginLeft","setMarginPercentLeft","setPaddingLeft","setBorderLeft","setPositionLeft","setPositionPercentLeft"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_LEFT,properties[method]);
                }else if(["setMarginRight","setMarginPercentRight","setPaddingRight","setBorderRight","setPositionRight","setPositionPercentRight"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_RIGHT,properties[method]);
                }else if(["setMarginTop","setMarginPercentTop","setPaddingTop","setBorderTop","setPositionTop","setPositionPercentTop"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_TOP,properties[method]);
                }else if(["setMarginBottom","setMarginPercentBottom","setPaddingBottom","setBorderBottom","setPositionBottom","setPositionPercentBottom"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_BOTTOM,properties[method]);
                }else if(["setMargin","setMarginPercent","setPadding","setBorder","setPosition","setPositionPercent"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_ALL,properties[method]);
                }else if(method.indexOf('setMarginAuto')>-1){
                    let side = method.replace('setMarginAuto','');
                    switch(side){
                        case "":
                            node[method](Yoga.EDGE_ALL);
                            break;
                        case "Left":
                            node[method](Yoga.EDGE_LEFT);
                            break;
                        case "Right":
                            node[method](Yoga.EDGE_RIGHT);
                            break;
                        case "Top":
                            node[method](Yoga.EDGE_TOP);
                            break;
                        case "Bottom":
                            node[method](Yoga.EDGE_BOTTOM);
                            break;
                    }
                }else if(["setWidthAuto","setHeightAuto"]
                    .indexOf(method)>-1) {
                    node[method]();
                }else{
                    node[method](properties[method]);
                }
            }
        }
    },
    initialiseYoga(parent){
        // Traverse the tree and setup Yoga layout nodes with default settings
        // or settings specified in the elements yoga properties component.
        parent = parent||this.container;
        // Automatically detect the entity width / height by the element tagname.
        let width = 0,height = 0;
        let geo = parent.getAttribute('geometry');
        switch(parent.tagName){
            case "A-TEXT":
            case "A-TRIANGLE":
            case "A-UI-TEXT-INPUT":
            case "A-UI-NUMBER-INPUT":
            case "A-UI-INT-INPUT":
            case "A-UI-INPUT-TEXT":
            case "A-UI-PASSWORD-INPUT":
                width = parent.getAttribute('width');
                height = parent.getAttribute('height');
                break;
            case "A-UI-BUTTON":
            case "A-PLANE":
            case "A-ENTITY":
                width = Number(geo?geo.width:parent.getAttribute('width'));
                height = Number(geo?geo.height:parent.getAttribute('height'));
                break;
            case "A-UI-FAB-BUTTON":
            case "A-UI-FAB-BUTTON-SMALL":
            case "A-CIRCLE":
                width = Number(geo?geo.radius*2:(parent.getAttribute('radius')||0)*2);
                height = width;
                break;
            case "A-RING":
                width = Number(geo?geo["radius-outer"]*2:(parent.getAttribute('radius-outer')||0)*2);
                height = width;
                break;
            case "A-UI-SLIDER":
            case "A-UI-NUMBER":
            case "A-UI-SWITCH":
            case "A-UI-CHECKBOX":
            case "A-UI-RADIO":
                let componentName = parent.tagName.substr(2).toLowerCase();
                width = parent.getAttribute(componentName).width;
                height = parent.getAttribute(componentName).height;
                break;
        }

        if(!parent.yoga_node){
            parent.yoga_node = Yoga.Node.create();
            let ui_yoga = parent.getAttribute("ui-yoga");
            if(ui_yoga&&parent.getYogaProperties){
                this.setupYogaNode(parent.yoga_node,width ? width * 100 : 'auto',height ? height * 100 : 'auto',
                    parent.getYogaProperties());
            }else{
                parent.yoga_node.setWidth(width ? width * 100 : 'auto');
                parent.yoga_node.setHeight(height ? height * 100 : 'auto');
                parent.yoga_node.setJustifyContent(Yoga.JUSTIFY_FLEX_START);
                parent.yoga_node.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
                parent.yoga_node.setAlignContent(Yoga.ALIGN_AUTO);
                parent.yoga_node.setFlexWrap(Yoga.WRAP_WRAP);
            }
            // Add the yoga node to the Yoga tree.
            if(parent.parentElement&&parent.parentElement.yoga_node){
                // Default margin if none set;
                if(!ui_yoga){
                    parent.yoga_node.setMargin(Yoga.EDGE_RIGHT, 5);
                    parent.yoga_node.setMargin(Yoga.EDGE_BOTTOM, 5);
                }
                parent.parentElement.yoga_node.insertChild(parent.yoga_node,parent.parentElement.yoga_node.getChildCount());
            }else{
                // Default root padding if none set;
                if(!ui_yoga){
                    parent.yoga_node.setPadding(Yoga.EDGE_ALL,2);
                }
            }
        }
        for(let i = 0; i < parent.childNodes.length; i++) {
            let child = parent.childNodes[i];
            if (child.nodeType === 1) {
                if(child.classList.contains('no-yoga-layout')){
                    return;
                }
                this.initialiseYoga(child);
            }
        }
    },
    updateYoga(parent){
        // Update the entity positions from the Yoga layout.
        for(let i = 0; i < parent.childNodes.length; i++){
            let child = parent.childNodes[i];
            if(child.nodeType === 1){
                if(child.classList.contains('no-yoga-layout')){
                    return;
                }
                let position;
                if(child.tagName==="A-ENTITY"){
                    position = {
                        x:(child.yoga_node.getComputedLeft()/100),
                        y:(child.yoga_node.getComputedTop()/100),
                    };
                }else{
                    position = {
                        x:(child.yoga_node.getComputedLeft()/100)+(child.yoga_node.getComputedWidth()/200),
                        y:(child.yoga_node.getComputedTop()/100)+(child.yoga_node.getComputedHeight()/200),
                    };
                }
                let highest = (child.yoga_node.getComputedTop()/100)+(child.yoga_node.getComputedHeight()/100);
                if(highest>this.content_height){
                    this.content_height = highest;
                }
                child.setAttribute('position',position.x+' '+(-position.y)+' 0.0001');//+child.getAttribute('position').z);
            }
            this.updateYoga(child);
        }
    },

    setChildClips(parent){
        // Traverse the entity tree inside the content container and add content clips to each material found.
        parent = parent||this.container;
        for(let i = 0; i < parent.childNodes.length; i++) {
            let child = parent.childNodes[i];
            //if (child.nodeType === 1) {
            child._content_clips = this.content_clips;
            let traverse = ()=>{
                if(child.object3D){
                    child.object3D.traverse(object=>{
                        if(object.material){
                            // Add shader chunks to be able to clip shader materials - needed for <a-text> entities.
                            if(object.material.isRawShaderMaterial){
                                object.material.onBeforeCompile = function ( shader ) {
                                    let vertexParts = shader.vertexShader.split('\n');
                                    let vertexMainIndex = vertexParts.indexOf('void main(void) {');
                                    vertexParts.splice(vertexMainIndex,0,'#include <clipping_planes_pars_vertex>');
                                    vertexParts.splice(vertexMainIndex+2,0,'#include <begin_vertex>');
                                    vertexParts.splice(vertexParts.length-2,0,'#include <project_vertex>');
                                    vertexParts.splice(vertexParts.length-2,0,'#include <clipping_planes_vertex>');
                                    shader.vertexShader = vertexParts.join('\n');
                                    let fragmentParts = shader.fragmentShader.split('\n');
                                    let fragmentMainIndex = fragmentParts.indexOf('void main() {');
                                    fragmentParts.splice(fragmentMainIndex,0,'#include <clipping_planes_pars_fragment>');
                                    fragmentParts.splice(fragmentMainIndex+2,0,'#include <clipping_planes_fragment>');
                                    shader.fragmentShader = fragmentParts.join('\n');
                                };
                                object.material.clipping = true;
                            }
                            // Set the content clipping planes.
                            object.material.clippingPlanes = this.content_clips;
                            object.material.clipShadows = true;
                            object.material.needsUpdate = true;
                        }
                    });
                }
            };
            // Wait for next tick - exokit required this.
            setTimeout(()=>{
                if(child.getAttribute){
                    let text = child.getAttribute('text');

                    if(text){
                        // Wait for the font to load first.
                        child.addEventListener('textfontset',()=>{
                            clearTimeout(this.fontRenderTimeout);
                            this.fontRenderTimeout = setTimeout(()=>UI.utils.stoppedChanging(this.currentUuid),500);
                            traverse();
                        })
                    }else{
                        traverse();
                    }
                }
            },0);
            // }
            // Recurse
            this.setChildClips(child);
        }
    }
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN */
/**
 * Checkbox Component for aframe-material-collection. Includes animation and disabled state.
 * @namespace aframe-material-collection
 * @component ui-checkbox
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-checkbox', {
    schema: {
        value: {type:'boolean',default: false},
        selectedColor: {default: '#009688'},
        unselectedColor: {default: '#7f7f7f'},
        disabledColor: {default: '#afafaf'},
        indeterminate: {type:'boolean',default: false},
        disabled:{type:'boolean',default: false},
        intersectableClass: {default: 'intersectable'},
        width:{type:'number',default: 0.15},
        height:{type:'number',default: 0.15},
    },
    init() {
        this.width = 0.15;
        this.height = 0.15;
        this.container = document.createElement('a-entity');
        this.container.setAttribute('class','no-yoga-layout');
        this.el.appendChild(this.container);
        this.setupLines();
        // Add backing element to make the whole object clickable.
        let backing = document.createElement('a-plane');
        backing.setAttribute('width',0.105);
        backing.setAttribute('height',0.105);
        backing.setAttribute('position','0 0 -0.002');
        backing.setAttribute('shader','flat');
        backing.setAttribute('class',this.data.intersectableClass+' no-yoga-layout');
        backing.setAttribute('opacity',0.0001);
        backing.setAttribute('transparent',true);
        this.el.appendChild(backing);
        this.clickHandler = ()=>{
            this.data.value = !this.data.value;
            this.click();
        };
        // Setup initial state
        this.setSelected();
        this.setDisabled();
        this.setTransform(1);
    },
    updateSchema(){
        if(this.data){
            this.setDisabled();
            if(this.data.disabled){
                if(this.data.value){
                    this.data.value=false;
                    this.data.indeterminate=false;
                    this.click();
                }
            }else{
                this.click();
            }
        }
    },
    setTransform(x){
        // Adjust position and rotation based on the interpolated value x between 0 and 1.
        // Used to offset the checkbox when in a checked state
        if(this.data.value){
            this.container.setAttribute('rotation',{x:0,y:0,z:-45*x});
            this.container.setAttribute('position',{x:-0.025*x,y:0.05*x,z:0});
        }else{
            this.container.setAttribute('rotation',{x:0,y:0,z:-45+(45*x)});
            this.container.setAttribute('position',{x:0.025-(0.025*x),y:0.05-(0.05*x),z:0});
        }
    },
    click(){
        // Reset indeterminate state on click
        this.data.indeterminate = false;
        // Hide / Show left and top lines for checked state, or right line aswell for intermediate state.
        this.setSelected();
        // run animation
        this.animateSelected()
    },
    animateSelected(){
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
        new TWEEN.Tween({x:0})
            .to({ x: 1}, 200)
            .onUpdate(function(){
                _this.setTransform(this.x);
            })
            .onComplete(function(){
                // Stop changes
                UI.utils.stoppedChanging(_this.el.object3D.uuid);
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    },
    setSelected(){
        // Hide / Show lines that make up checkbox based on the current state.
        if(this.data.value){
            this.topLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.leftLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.bottomLine.setAttribute('scale','1 1 1');
            this.rightLine.setAttribute('scale','1 1 1');
            this.bottomLine.setAttribute('position','0.025 -0.05 0');
            this.rightLine.setAttribute('position','0.05 0 0');
            this.bottomLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('height',0.05);
            this.bottomLine.setAttribute('color',this.data.selectedColor);
            this.rightLine.setAttribute('color',this.data.selectedColor);
        }else if(this.data.indeterminate){
            this.topLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.leftLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.bottomLine.setAttribute('scale','1 1 1');
            this.rightLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.bottomLine.setAttribute('position','0 0 0');
            this.bottomLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('height',0.1);
            this.bottomLine.setAttribute('color',this.data.unselectedColor);
            this.rightLine.setAttribute('color',this.data.unselectedColor);
        }else{
            this.topLine.setAttribute('scale','1 1 1');
            this.leftLine.setAttribute('scale','1 1 1');
            this.bottomLine.setAttribute('scale','1 1 1');
            this.rightLine.setAttribute('scale','1 1 1');
            this.bottomLine.setAttribute('height',0.1);
            this.leftLine.setAttribute('position','-0.05 0 0');
            this.rightLine.setAttribute('position','0.05 0 0');
            this.topLine.setAttribute('position','0 0.05 0');
            this.bottomLine.setAttribute('position','0 -0.05 0');
            this.topLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('color',this.data.unselectedColor);
            this.rightLine.setAttribute('color',this.data.unselectedColor);
        }
    },
    setupLines(){
        // Add four lines to make a square wireframe
        this.leftLine = this.line(true);
        this.rightLine = this.line(true);
        this.topLine = this.line(true);
        this.bottomLine = this.line(true);
        this.container.appendChild(this.topLine);
        this.container.appendChild(this.leftLine);
        this.container.appendChild(this.bottomLine);
        this.container.appendChild(this.rightLine);
    },
    setDisabled(){
        // Check and set the disabled state of the checkbox - add / remove click handler.
        if(this.data.disabled){
            this.el.removeEventListener('mousedown',this.clickHandler);
            this.topLine.setAttribute('color',this.data.disabledColor);
            this.leftLine.setAttribute('color',this.data.disabledColor);
            this.rightLine.setAttribute('color',this.data.disabledColor);
            this.bottomLine.setAttribute('color',this.data.disabledColor);
        }else{
            this.el.addEventListener('mousedown',this.clickHandler);
            this.topLine.setAttribute('color',this.data.unselectedColor);
            this.leftLine.setAttribute('color',this.data.unselectedColor);
            this.rightLine.setAttribute('color',this.data.value?this.data.selectedColor:this.data.unselectedColor);
            this.bottomLine.setAttribute('color',this.data.value?this.data.selectedColor:this.data.unselectedColor);
        }
    },
    line(is_vertical){
        // Create horizontal/vertical line.
        let line = document.createElement('a-plane');
        line.setAttribute('width',is_vertical?0.01:0.105);
        line.setAttribute('height',is_vertical?0.105:0.01);
        line.setAttribute('class','no-yoga-layout');
        line.setAttribute('shader','flat');
        return line;
    }
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN */
/**
 * Radio Component for aframe-material-collection. Resets other radio buttons siblings and includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-radio
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent("ui-radio", {
  schema: {
    value: { default: "" },
    selected: { type: "boolean", default: false },
    selectedColor: { default: "#009688" },
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
    this.filled_circle = document.createElement("a-circle");
    this.filled_circle.setAttribute("radius", this.data.selectedRadius);
    this.filled_circle.setAttribute("scale", "0 0 0");
    this.filled_circle.setAttribute("color", this.data.disabled ? this.data.disabledColor : this.data.selectedColor);
    this.filled_circle.setAttribute("shader", "flat");
    this.filled_circle.setAttribute("class", this.data.intersectableClass + "no-yoga-layout");
    this.filled_circle.setAttribute("segments", 6);
    this.el.components.material.material.color = new THREE.Color(this.data.disabled ? this.data.disabledColor : this.data.unselectedColor);
    this.el.appendChild(this.filled_circle);
    // Create backing for getting click events.
    this.backing = document.createElement("a-circle");
    this.backing.setAttribute("radius", this.data.selectedRadius);
    this.backing.setAttribute("position", "0 0 0.01");
    this.backing.setAttribute("class", this.data.intersectableClass + " no-yoga-layout");
    this.backing.setAttribute("shader", "flat");
    this.backing.setAttribute("segments", 6);
    this.backing.setAttribute("opacity", 0.0001);
    this.backing.setAttribute("transparent", true);

    this.el.appendChild(this.backing);

    // Set this if it is checked.
    if (this.data.selected) {
      this.click();
    }

    this.clickHandler = e => {
      this.click(e);
      // Prevent default behaviour of event
      if (e.detail.preventDefault) {
        e.detail.preventDefault();
      }
    };
  },
  play() {
    // Add / Remove click handlers based on disabled state.
    if (this.data.disabled) {
      this.backing.removeEventListener("mousedown", this.clickHandler);
      this.filled_circle.removeEventListener("mousedown", this.clickHandler);
    } else {
      this.backing.addEventListener("mousedown", this.clickHandler);
      this.filled_circle.addEventListener("mousedown", this.clickHandler);
    }
  },
  pause() {
    if (!this.data.disabled) {
      this.backing.removeEventListener("mousedown", this.clickHandler);
      this.filled_circle.removeEventListener("mousedown", this.clickHandler);
    }
  },
  deselect() {
    // Deselect this radio with a scale animation on the circle.
    this.el.setAttribute("selected", false);
    let _this = this;
    // Start changes
    UI.utils.isChanging(this.el.sceneEl, this.filled_circle.object3D.uuid);
    new TWEEN.Tween({ x: 1 })
      .to({ x: 0.000001 }, 200)
      .onUpdate(function() {
        _this.filled_circle.object3D.scale.set(this.x, this.x, this.x);
      })
      .onComplete(() => {
        // Stop changes
        UI.utils.stoppedChanging(_this.filled_circle.object3D.uuid);
        this.isRippling = false;
      })
      .easing(TWEEN.Easing.Exponential.Out)
      .start();
  },
  click() {
    // Get all other radio siblings and reset their state if they are selected.
    [].slice
      .call(this.el.parentNode.querySelectorAll("a-ring,a-ui-radio"))
      .filter(el => el !== this.el)
      .forEach(ring => {
        if (ring.components["ui-radio"] && ring.getAttribute("selected") === "true") {
          ring.components["ui-radio"].deselect();
        }
      });
    // Emit the current selected value
    this.el.emit("ui-radio-changed", this.data.value);
    // Set this radio's selected state.
    this.el.setAttribute("selected", true);
    // Throttle animations.
    if (this.isSelecting) return;
    this.isSelecting = true;
    let _this = this;
    // Start changes
    UI.utils.isChanging(this.el.sceneEl, this.filled_circle.object3D.uuid);
    new TWEEN.Tween({ x: 0.000001 })
      .to({ x: 1 }, 250)
      .onUpdate(function() {
        _this.filled_circle.object3D.scale.set(this.x, this.x, this.x);
      })
      .onComplete(() => {
        // Stop changes
        UI.utils.stoppedChanging(this.filled_circle.object3D.uuid);
        this.isSelecting = false;
      })
      .easing(TWEEN.Easing.Exponential.Out)
      .start();
  }
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * A curved-plane component to curve a plane primitive.
 * @namespace aframe-material-collection
 * @component ui-curved-plane
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-curved-plane', {
    schema: {
        depth:{type:'number',default:0.03}
    },
    init(){
        let mesh = this.el.getObject3D('mesh');
        let width = this.el.getAttribute('width');
        let height = this.el.getAttribute('height');
        let browser_pane = new THREE.PlaneGeometry(width, height, 5, 1);
        let curve = new THREE.CubicBezierCurve3(
            browser_pane.vertices[0],
            new THREE.Vector3(0.375*width, 0, -this.data.depth*width ),
            new THREE.Vector3(0.625*width, 0, -this.data.depth*width ),
            browser_pane.vertices[(browser_pane.vertices.length/2) - 1]
        );
        let planePoints = curve.getPoints(Math.abs(browser_pane.vertices.length/2)-1);
        for (let edgeI = 1; edgeI < 3; edgeI++) {
            for (let pointI = 0; pointI < planePoints.length; pointI++) {
                browser_pane.vertices[(edgeI === 2 ? planePoints.length + pointI : pointI)].z = planePoints[pointI].z;
            }
        }
        mesh.geometry = browser_pane;
    }
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * A component to render the UI to a flat plane, removing the objects from the scene and rendering them separately to a
 * render target.
 * @namespace aframe-material-collection
 * @component ui-renderer
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-renderer', {
    schema: {
        uiPanel: {type: 'selector'},
        lookControlsEl: {type: 'selector'},
        lookControlsComponent:{default:'look-controls'},
        panelPosition:{type:'vec3',default:{x:0,y:1.6,z:-1}},
        panelSize:{type:'vec2',default:{x:6,y:3}},
        renderResolution:{type:'vec2',default:{x:2048,y:1024}},
        debugRaycaster:{type:'boolean',default: false},
        fps:{type:'number',default:60},
        intersectableClass:{default:'intersectable'},
        debug:{type:'boolean',default:false},
        initDelay:{type:'int',default:0},
    },
    init() {
        this.setupBackDrop();
        if(!this.data.uiPanel){
            this.meshEl = this.setupUIPanel();
        }else{
            this.meshEl = this.data.uiPanel;
        }
        // Remove this object from the scene to be rendered separately.
        this.el.object3D.parent.remove(this.el.object3D);
        // Setup fixed camera nd render target.
        this.camera = new THREE.PerspectiveCamera( 100, 2, 0.1, 1000 );
        // Setup render target
        this.renderTarget = new THREE.WebGLRenderTarget(this.data.renderResolution.x,this.data.renderResolution.y, { antialias: true } );
        // Set the texture to the ui panel mesh.
        this.meshEl.getObject3D('mesh').material.map = this.renderTarget.texture;
        // emit ready event for anythng wanting to use this texture.
        this.meshEl.emit('texture-ready',this.renderTarget.texture);
        // Listen for change events to enable rendering.
        this.stoppedRendering = false;
        this.isRendering = true;
        // Listen for change events to enable/disable rendering
        this.el.sceneEl.addEventListener('ui-changing',()=>{
            //console.log(JSON.stringify(new Date()),'ui-changing');
            this.stoppedRendering = false;
            this.isRendering = true;
        });
        this.el.sceneEl.addEventListener('ui-changing-stopped',()=>{
            //console.log(JSON.stringify(new Date()),'ui-changing-stopped');
            this.isRendering = false;
        });
        // Setup raycaster for relaying mouse/keyboard events
        this.raycaster = new THREE.Raycaster();
        this.helper = new THREE.Mesh(new THREE.SphereGeometry(0.01),new THREE.MeshBasicMaterial({color:'#ff0000'}));
        // Add cursor helper to object
        if(this.data.debugRaycaster)this.el.object3D.add(this.helper);
        // Set last render time
        this.lastRenderTime = 0;
        this.isFrozen = false;

        // Expose methods to the element to pause/play the renderer.
        this.el.pauseRender = this.pauseRender.bind(this);
        this.el.playRender = this.playRender.bind(this);
        this.isReady = false;
        setTimeout(()=>{this.isReady = true;},this.data.initDelay);
    },
    pauseRender(time){
        return this.playRender(time,true)
    },
    playRender(time,isPaused){
        let _this = this;
        return new Promise(resolve=>{
            if(_this.isFrozen===isPaused||_this.isAnimatingBackground)return resolve();
            _this.isAnimatingBackground = true;
            if(!_this.isFrozen)this.backdrop.setAttribute('scale','1 1 1');
            let fromScale = _this.isFrozen?0.9:0.000001;
            let toScale = _this.isFrozen?0.000001:0.9;
            let duration = _this.isFrozen?time||350:time||500;
            if(_this.isFrozen){
                _this.isFrozen = isPaused;
                _this.play();
            }
            UI.utils.isChanging(_this.el.sceneEl,_this.backdrop.uuid);
            new TWEEN.Tween({x:fromScale})
                .to({x:toScale}, duration)
                .onUpdate(function(){
                    _this.backdrop.setAttribute('opacity',this.x);
                })
                .onComplete(()=>{
                    _this.isFrozen = isPaused;
                    _this.isAnimatingBackground = false;
                    if(_this.isFrozen){
                        _this.pause();
                    }else{
                        this.backdrop.setAttribute('scale','0.000001 0.000001 0.000001');
                    }
                    // Stop changes
                    UI.utils.stoppedChanging(this.backdrop.uuid);
                    resolve();
                })
                .easing(TWEEN.Easing.Exponential.Out).start();
        });
    },
    setupBackDrop(){
        this.backdrop = document.createElement('a-plane');
        this.backdrop.setAttribute('transparent',true);
        this.backdrop.setAttribute('opacity',0.000001);
        this.backdrop.setAttribute('color','#000');
        this.backdrop.setAttribute('shader','flat');
        this.backdrop.setAttribute('position',{x:0,y:0,z:-0.2});
        this.backdrop.setAttribute('width',1);
        this.backdrop.setAttribute('height',1);
        this.backdrop.setAttribute('scale','0.000001 0.000001 0.000001');
        this.el.appendChild(this.backdrop);
    },
    play(){
        this.lastMouseMoveTime = 0;
        // Register event listeners
        // Mousedown and mouseup do not have the correct intersection point. Use last mouse move event if available instead.
        // TODO: raise issue with aframe / submit PR;
        this.click = e=>this.mouseEvent('click',this.lastMoveEvent||e);
        this.mousedown = e=>this.mouseEvent('mousedown',this.lastMoveEvent||e);
        this.mouseup = e=>this.mouseEvent('mouseup',this.lastMoveEvent||e);
        this.mousewheel = e=>this.mouseEvent('ui-mousewheel',e.detail.evt);
        this.mousemove = e=>{
            // Save mousemove event for mousedown/mouseup events.
            this.lastMoveEvent = e;
            this.mouseEvent('ui-mousemove',e);
        };
        this.meshEl.addEventListener('mousedown',this.mousedown);
        this.meshEl.addEventListener('mouseup',this.mouseup);
        this.meshEl.addEventListener('click',this.click);
        this.meshEl.addEventListener('ui-mousemove',this.mousemove);
        this.meshEl.addEventListener('ui-mousewheel',this.mousewheel);
    },
    pause(){
        this.meshEl.removeEventListener('mousedown',this.mousedown);
        this.meshEl.removeEventListener('mouseup',this.mouseup);
        this.meshEl.removeEventListener('click',this.click);
        this.meshEl.removeEventListener('ui-mousemove',this.mousemove);
        this.meshEl.removeEventListener('ui-mousewheel',this.mousewheel);
    },
    setupUIPanel(){
        let uiPanel = document.createElement('a-plane');
        uiPanel.setAttribute('position',this.data.panelPosition);
        uiPanel.setAttribute('width',this.data.panelSize.x);
        uiPanel.setAttribute('height',this.data.panelSize.y);
        this.el.sceneEl.appendChild(uiPanel);
        return uiPanel;
    },
    mouseEvent(type,e){
        let mouse = {x:0,y:0};
        if(e.detail.intersection){
            let localPoint = this.meshEl.object3D.worldToLocal(e.detail.intersection.point.clone());

            mouse = {
                x:localPoint.x/this.meshEl.getAttribute('width')*2,
                y:localPoint.y/this.meshEl.getAttribute('height')*2
            };
        }
        if(type==='ui-mousewheel'&&e.detail.evt){
            mouse.deltaY = e.detail.deltaY;
            mouse.deltaX = e.detail.deltaX;
        }
        if(type==='mousedown'&&this.lookControlsEl&&this.lookControlsEl.components['look-controls']){
            this.lookControlsEl.components[this.data.lookControlsComponent].pause()
        }
        if(type==='mouseup'&&this.lookControlsEl&&this.lookControlsEl.components['look-controls']){
            this.lookControlsEl.components[this.data.lookControlsComponent].play()
        }
        this.raycastIntersections(e,mouse,type);
    },
    raycastIntersections(e,mouse,type){
        if(!this.camera)return;
        //console.log(mouse);
        this.raycaster.setFromCamera( mouse, this.camera );
        // this.helper.setDirection(this.raycaster.ray.direction);
        let intersections = this.raycaster.intersectObjects( this.el.object3D.children, true );
        this.prevIntersectionEls = this.prevIntersectionEls||[];
        let intersectionEls = [];
        if(intersections.length&&this.data.debugRaycaster){
            let intersectionPoint = intersections[0].point;
            if(intersections[0].object===this.helper&&intersections.length>1){
                intersectionPoint = intersections[1].point;
            }
            this.helper.position.copy(intersectionPoint);
            this.helper.position.x-=0.03;
        }
        let defaultPrevented = false;
        for(let i = 0;i < intersections.length; i++){
            let intersection = intersections[i];
            // Only emit events on objecst with an element attached
            if(intersection.object.el&&intersection.object.el.classList.contains(this.data.intersectableClass)){
                let currentEvent = {intersection:intersection,evt:e,preventDefault:()=>{defaultPrevented=true}};
                // If this is the first time weve seen this element then emit the mouseenter event.
                if(this.prevIntersectionEls.indexOf(intersection.object.el)===-1&&!defaultPrevented){
                    intersection.object.el.emit('mouseenter',currentEvent);
                }
                // Emit the mouse event received
                if(!defaultPrevented||type==='ui-mousewheel'){
                    intersection.object.el.emit(type,currentEvent);
                }
                // Store the intersection on the element.
                intersection.object.el.intersection = intersection;
                // Add the current el to the list to check against previous intersection els.
                intersectionEls.push(intersection.object.el);
            }
        }
        // Find any intersections that have disappeared to emit the mouse leave event.
        for(let i = 0;i < this.prevIntersectionEls.length; i++){
            let intersectionEl = this.prevIntersectionEls[i];
            if(intersectionEls.indexOf(intersectionEl)===-1){
                intersectionEl.emit('mouseleave',{intersection:intersectionEl.intersection});
            }
        }
        // Store the current intersected elements for the next iteration.
        this.prevIntersectionEls = intersectionEls;
    },
    tick(delta){
        if(this.isFrozen||this.stoppedRendering||!this.isReady)return;
        if(delta-this.lastRenderTime<(1000/this.data.fps)&&this.isRendering)return;
        this.el.object3D.traverse(child=>{
            child.updateMatrixWorld();
        });

        let renderer = this.el.sceneEl.renderer;
        let vrModeEnabled = renderer.vr.enabled;
        renderer.vr.enabled = false;
        renderer.render(this.el.object3D,this.camera,this.renderTarget);
        renderer.vr.enabled = vrModeEnabled;
        this.lastRenderTime = delta;
        if(!this.isRendering){
            this.stoppedRendering = true;
        }
    }
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/* global AFRAME,Yoga */
/**
 * Yogo Layout Engine mapped to a Component for aframe-material-collection - https://yogalayout.com
 * @namespace aframe-material-collection
 * @component ui-yoga
 * @author Shane Harris
 */

if (typeof Yoga === 'undefined') {
    throw 'ui-yoga component requires the Yoga Layout Engine to be loaded - https://yogalayout.com';
}
// Map yoga enums to frendly names.
// TODO: Need to expose the padding/border/margin side as seperate options to allow for combinations.
module.exports = AFRAME.registerComponent('ui-yoga', {
    schema: {
        alignContent: {default: 'flex-start'},
        alignItems: {default: 'auto'},
        alignSelf: {default: 'auto'},
        display: {default: 'default'},
        flex: {type:'number',default: 1},
        flexDirection: {default: 'row'},
        flexWrap:{default: 'default'},
        aspectRatio: {default: 'default'},
        overflow:{default:'default'},
        justifyContent:{default:'start'},
        border: {type:'int',default: 0},
        borderLeft: {type:'int',default: 0},
        borderRight: {type:'int',default: 0},
        borderTop: {type:'int',default: 0},
        borderBottom: {type:'int',default: 0},
        padding: {type:'int',default: 0},
        paddingLeft: {type:'int',default: 0},
        paddingRight: {type:'int',default: 0},
        paddingTop: {type:'int',default: 0},
        paddingBottom: {type:'int',default: 0},
        margin: {type:'int',default: 0},
        marginLeft: {type:'int',default: 0},
        marginRight: {type:'int',default: 0},
        marginTop: {type:'int',default: 0},
        marginBottom: {type:'int',default: 0},
        marginAuto: {type:'boolean',default: false},
        marginAutoLeft: {type:'boolean',default: false},
        marginAutoRight: {type:'boolean',default: false},
        marginAutoTop: {type:'boolean',default: false},
        marginAutoBottom: {type:'boolean',default: false},
        marginPercent:{type:'number',default: 0},
        marginPercentLeft: {type:'int',default: 0},
        marginPercentRight: {type:'int',default: 0},
        marginPercentTop: {type:'int',default: 0},
        marginPercentBottom: {type:'int',default: 0},
        flexBasis: {default: 'default'},
        flexBasisPercent: {type:'number',default: 0},
        flexGrow:{type:'number',default: 0},
        flexShrink:{type:'number',default: 1},
        maxHeight:{default: 'default'},
        minHeight:{default: 'default'},
        maxWidth:{default: 'default'},
        minWidth:{default: 'default'},
        maxHeightPercent:{default: 'default'},
        minHeightPercent:{default: 'default'},
        maxWidthPercent:{default: 'default'},
        minWidthPercent:{default: 'default'},
        position:{default: 'default'},
        positionLeft: {type:'int',default: 0},
        positionRight: {type:'int',default: 0},
        positionTop: {type:'int',default: 0},
        positionBottom: {type:'int',default: 0},
        positionPercent:{default: 'default'},
        positionPercentLeft: {type:'int',default: 0},
        positionPercentRight: {type:'int',default: 0},
        positionPercentTop: {type:'int',default: 0},
        positionPercentBottom: {type:'int',default: 0},
        width:{default: 'default'},
        height:{default: 'default'},
        widthAuto:{type:'boolean',default: false},
        heightAuto:{type:'boolean',default: false},
        widthPercent:{default: 'default'},
        heightPercent:{default: 'default'},
    },
    init(){
        this.el.getYogaProperties = this.getProperties.bind(this);
        this.setProperties();
    },
    updateSchema(){
        this.setProperties();
    },
    setProperties(){
        this.properties = this.properties||[];
        this.properties.length = 0;
        // Store the current valid yoga properties;
        for(let name in this.data){
            if(this.data.hasOwnProperty(name)&&
                this.data[name]!=='default'&&this.data[name]){
                let value = this.mapPropertyToEnum(name);
                if(value)this.properties.push({method:'set'+name.charAt(0).toUpperCase() + name.substr(1),value:this.mapPropertyToEnum(name)});
            }
        }
    },
    getProperties(){
        // Get the current yoga properties array as an object
        let propertiesObj = {};
        for(let i = 0;i < this.properties.length;i++){
            propertiesObj[this.properties[i].method] = this.properties[i];
        }
        return propertiesObj;
    },
    mapPropertyToEnum(name){
        // Get the yoga enum for the friendly name.
        switch(true){
            case name.indexOf('align') > -1:
                return this.enums.align[this.data[name]];
            case name.indexOf('Edge') > -1:
                return this.enums.edge[this.data[name]];
            case name === 'flexDirection':
            case name === 'flexWrap':
            case name === 'positionType':
            case name === 'overflow':
            case name === 'display':
            case name === 'justifyContent':
                return this.enums[name][this.data[name]];
            default:
                return this.data[name];
        }
    },
    enums:{
        align:{
            count:Yoga.ALIGN_COUNT,
            auto:Yoga.ALIGN_AUTO,
            "flex-start":Yoga.ALIGN_FLEX_START,
            center:Yoga.ALIGN_CENTER,
            "flex-end":Yoga.ALIGN_FLEX_END,
            stretch:Yoga.ALIGN_STRETCH,
            baseline:Yoga.ALIGN_BASELINE,
            "space-between":Yoga.ALIGN_SPACE_BETWEEN,
            "space-around":Yoga.ALIGN_SPACE_AROUND,
        },
        dimension:{
            count:Yoga.DIMENSION_COUNT,
            width:Yoga.DIMENSION_WIDTH,
            height:Yoga.DIMENSION_HEIGHT,
        },
        direction:{
            count:Yoga.DIRECTION_COUNT,
            inherit:Yoga.DIRECTION_INHERIT,
            ltr:Yoga.DIRECTION_LTR,
            rtl:Yoga.DIRECTION_RTL,
        },
        display:{
            count:Yoga.DISPLAY_COUNT,
            flex:Yoga.DISPLAY_FLEX,
            none:Yoga.DISPLAY_NONE,
        },
        edge:{
            count:Yoga.EDGE_COUNT,
            left:Yoga.EDGE_LEFT,
            top:Yoga.EDGE_TOP,
            right:Yoga.EDGE_RIGHT,
            bottom:Yoga.EDGE_BOTTOM,
            start:Yoga.EDGE_START,
            end:Yoga.EDGE_END,
            horizontal:Yoga.EDGE_HORIZONTAL,
            vertical:Yoga.EDGE_VERTICAL,
            all:Yoga.EDGE_ALL,
        },
        experimental:{
            count:Yoga.EXPERIMENTAL_FEATURE_COUNT,
            "flex-basis":Yoga.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS,
        },
        flexDirection:{
            count:Yoga.FLEX_DIRECTION_COUNT,
            column:Yoga.FLEX_DIRECTION_COLUMN,
            "column-reverse":Yoga.FLEX_DIRECTION_COLUMN_REVERSE,
            row:Yoga.FLEX_DIRECTION_ROW,
            reverse:Yoga.FLEX_DIRECTION_ROW_REVERSE,
        },
        justifyContent:{
            count:Yoga.JUSTIFY_COUNT,
            start:Yoga.JUSTIFY_FLEX_START,
            center:Yoga.JUSTIFY_CENTER,
            end:Yoga.JUSTIFY_FLEX_END,
            between:Yoga.JUSTIFY_SPACE_BETWEEN,
            around:Yoga.JUSTIFY_SPACE_AROUND,
            evenly:Yoga.JUSTIFY_SPACE_EVENLY,
        },
        logLevel:{
            count:Yoga.LOG_LEVEL_COUNT,
            error:Yoga.LOG_LEVEL_ERROR,
            warn:Yoga.LOG_LEVEL_WARN,
            info:Yoga.LOG_LEVEL_INFO,
            debug:Yoga.LOG_LEVEL_DEBUG,
            verbose:Yoga.LOG_LEVEL_VERBOSE,
            fatal:Yoga.LOG_LEVEL_FATAL,
        },
        measureMode:{
            count:Yoga.MEASURE_MODE_COUNT,
            undefined:Yoga.MEASURE_MODE_UNDEFINED,
            exactly:Yoga.MEASURE_MODE_EXACTLY,
            "at-most":Yoga.MEASURE_MODE_AT_MOST,
        },
        nodeType:{
            count:Yoga.NODE_TYPE_COUNT,
            default:Yoga.NODE_TYPE_DEFAULT,
            text:Yoga.NODE_TYPE_TEXT,
        },
        overflow:{
            count:Yoga.OVERFLOW_COUNT,
            visible:Yoga.OVERFLOW_VISIBLE,
            hidden:Yoga.OVERFLOW_HIDDEN,
            scroll:Yoga.OVERFLOW_SCROLL,
        },
        positionType:{
            count:Yoga.POSITION_TYPE_COUNT,
            relative:Yoga.POSITION_TYPE_RELATIVE,
            absolute:Yoga.POSITION_TYPE_ABSOLUTE,
        },
        printOptions:{
            count:Yoga.PRINT_OPTIONS_COUNT,
            layout:Yoga.PRINT_OPTIONS_LAYOUT,
            style:Yoga.PRINT_OPTIONS_STYLE,
            children:Yoga.PRINT_OPTIONS_CHILDREN,
        },
        unit:{
            count:Yoga.UNIT_COUNT,
            undefined:Yoga.UNIT_UNDEFINED,
            point:Yoga.UNIT_POINT,
            percent:Yoga.UNIT_PERCENT,
            auto:Yoga.UNIT_AUTO,
        },
        flexWrap:{
            count:Yoga.WRAP_COUNT,
            "no-wrap":Yoga.WRAP_NO_WRAP,
            wrap:Yoga.WRAP_WRAP,
            "wrap-reverse":Yoga.WRAP_WRAP_REVERSE,
        }
    }
});

/***/ }),
/* 24 */
/***/ (function(module) {

module.exports = {"name":"aframe-material-collection","version":"0.4.40","description":"Material UI based primitives and components for use in your aframe projects.","homepage":"https://github.com/shaneharris/aframe-material-collection","keywords":["AFRAME","UI","Material"],"scripts":{"start":"webpack-dev-server --mode development","build":"webpack --mode production"},"repository":{"type":"git","url":"git@github.com:shaneharris/aframe-material-collection.git"},"bugs":{"url":"https://github.com/shaneharris/aframe-material-collection/issues"},"devDependencies":{"uglifyjs-webpack-plugin":"^1.2.7","webpack":"^4.16.1","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.4"},"author":"Shane Harris","license":"MIT","dependencies":{}};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Text Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-text-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-text-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            placeHolder:'Text...'
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Number Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-number-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-number-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            type:'number',
            placeHolder:'Number...'
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Integer Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-int-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-int-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            type:'int',
            placeHolder:'Whole Number...'
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 *  Password Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-password-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-password-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            type:'password',
            placeHolder:''
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Text input component Component for aframe-material-collection. Includes support for number/int only input.
 * @namespace aframe-material-collection
 * @component ui-text
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-text', {
    schema: {
        width:{type:'number',default:0.5},
        height:{type:'number',default:0.1},
        value: {default: ''},
        type: {default: 'text'},
        lineFocusColor: {default: '#009688'},
        lineBlurColor: {default: '#cfcfcf'},
        disabledColor: {default: '#afafaf'},
        disabled: {type: 'boolean', default: false},
        fontFamily: {default: 'Roboto'},
        fontColor: {default: '#4f4f4f'},
        placeHolder: {default: 'Text...'},
        intersectableClass: {default: 'intersectable'},
    },
    init(){

        // if (typeof CanvasInput === 'undefined') {
        //     throw 'aframe-material-collection requires CanvasInput to be loaded first - <script src="https://cdn.rawgit.com/shaneharris/CanvasInput/master/CanvasInput.js"></script>';
        // }
        console.warn('ui-text is deprecated. please use ui-input-text instead. Thanks!');
    }
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * A component to load an icon and set some defaults for positioning and transparency.
 * @namespace aframe-material-collection
 * @component ui-icon
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-icon', {
    schema: {
        src: {default: 'icons/send_white_64dp.png'},
        size:{type:'vec2',default:{x:0.1,y:0.1}},
        zIndex:{type:'number',default:0.003},
        color:{default:'#fff'}
    },
    init() {
        this.icon = new THREE.Mesh(new THREE.PlaneGeometry(this.data.size.x,this.data.size.y),new THREE.MeshBasicMaterial({color:this.data.color,alphaTest:0.4,transparent:true,map:new THREE.TextureLoader().load(this.data.src)}));
        this.icon.position.set(0,0,this.data.zIndex);
        this.el.object3D.add(this.icon);
    }
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Rounded corners Component for aframe-material-collection. Expects an a-plane entity.
 * @namespace aframe-material-collection
 * @component ui-rounded
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-rounded', {
    schema: {
        borderRadius: {type: 'number', default: 0.01},
        curveSegments:{type: 'int', default: 1},
    },
    init() {
        let mesh = this.el.getObject3D('mesh');
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
        } )( roundedRectShape, -mesh.geometry.metadata.parameters.width/2, -mesh.geometry.metadata.parameters.height/2, mesh.geometry.metadata.parameters.width, mesh.geometry.metadata.parameters.height, this.data.borderRadius );
        // Update the geometry.
        mesh.geometry = new THREE.ShapeBufferGeometry(roundedRectShape,this.data.curveSegments);
        // Emit rounded-loaded event once the geometry has been updated.
        this.el.emit('rounded-loaded', null, false);
    }
});

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Ripple Component for aframe-material-collection. Add a ripple to an entity with options for controlling
 * clamping the animation and offsetting the ripple z position to place on top or bottom
 * @namespace aframe-material-collection
 * @component ui-ripple
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-ripple',{
    schema:{
        color: {default: '#fff'},
        duration:{type:'int',default:1000},
        fadeDuration:{type:'int',default:750},
        fadeDelay:{type:'int',default:250},
        clampToSquare:{type:'boolean',default:false},
        size:{type:'vec2',default:{x:1,y:1}},
        zIndex:{type:'number',default:-0.001},
        segments:{type:'int',default:6}
    },
    init(){
        // Setup circle geometry for ripple effect
        this.rippleGeometry = new THREE.CircleGeometry(Math.max(this.data.size.x,this.data.size.y),this.data.segments);
        this.ripple = new THREE.Mesh(this.rippleGeometry.clone(),new THREE.MeshBasicMaterial({color:this.data.color,transparent:true, opacity:0.4,alphaTest:0.1}));
        this.ripple.scale.set(0.00001,0.00001,0.00001);
        this.el.object3D.add(this.ripple);
        this.el.addEventListener('mousedown',this.click.bind(this));
        this.ripple.position.set(0,0,this.data.zIndex);
        // Set clipping planes if clamping to square
        if(this.data.clampToSquare){

            this.content_clips = [
                new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), (this.data.size.y/2) ),
                new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), (this.data.size.y/2) ),
                new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), (this.data.size.x/2) ),
                new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), (this.data.size.x/2) )
            ];
        }
    },
    click(e){
        if(this.isRippling){
            // Throttle clicks.
            return e.preventDefault();
        }
        this.isRippling = true;
        // Set clipping planes if clamping to square
        if(this.data.clampToSquare){
            this.setRippleClips(this.ripple.material);
        }
        // Animate the size of the circle ripple from the center of the entity.
        this.tweenSize(this.ripple.geometry);
        // Fade the circle out as it ripples.
        this.tweenOpacity(this.ripple.material);
    },
    setRippleClips(){
        // update content clips world positions from this current element.
        this.content_clips[0].set(new THREE.Vector3( 0, 1, 0 ), (this.data.size.y/2));
        this.content_clips[1].set(new THREE.Vector3( 0, -1, 0 ), (this.data.size.y/2));
        this.content_clips[2].set(new THREE.Vector3( -1, 0, 0 ), (this.data.size.x/2));
        this.content_clips[3].set(new THREE.Vector3( 1, 0, 0 ), (this.data.size.x/2));
        //this.el.sceneEl.object3D.updateMatrixWorld();
        this.content_clips[0].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[1].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[2].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[3].applyMatrix4(this.el.object3D.matrixWorld);
        this.ripple.material.clippingPlanes = this.el._content_clips?this.el._content_clips.concat(this.content_clips):this.content_clips;
        this.ripple.material.clipShadows = true;
        this.ripple.material.needsUpdate = true;
    },
    tweenSize(geometry){
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,_this.ripple.uuid);
        new TWEEN.Tween({x:0.00001})
            .to({ x: 1}, this.data.duration)
            .onUpdate(function(){
                _this.ripple.scale.set(this.x,this.x,this.x);
            })
            .onComplete(()=>{
                _this.ripple.scale.set(0.00001,0.00001,0.00001);
                // Reset throttle flag.
                this.isRippling = false;
                // Stop changes
                UI.utils.stoppedChanging(_this.ripple.uuid);
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    },
    tweenOpacity(material){
        new TWEEN.Tween({x:0.4})
            .to({ x: 0}, this.data.fadeDuration)
            .delay(this.data.fadeDelay)
            .onUpdate(function(){
                material.opacity = this.x;
            })
            .onComplete(()=>{
                material.opacity = 0.4;
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    }
});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * A component shim the mouse move event for the AFRAME cursor raycaster.
 * @namespace aframe-material-collection
 * @component ui-mouse-shim
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-mouse-shim', {
    schema:{
        fps:{type:'number',default:45}
    },
    init(){
        if (!this.el.components.raycaster) {
            throw 'ui-mouse-move component needs the raycaster component to be added.'
        }
        // Add support for mouse wheel
        this.el.sceneEl.renderer.domElement.addEventListener( 'wheel', this.onMouseWheel.bind(this), false);
    },
    onMouseWheel(e){
        this.emitMouseEvent('ui-mousewheel',e);
    },
    tick() {
        if(new Date().getTime()-this.lastMouseMoveTime<(1000/this.data.fps))return;
        this.emitMouseEvent('ui-mousemove');
        this.lastMouseMoveTime = new Date().getTime();
    },
    emitMouseEvent(eventType,event){
        // Get current intersections from raycaster component.
        this.el.components.raycaster.intersections.forEach(intersection=>{
            if(intersection.object.el){
                // Emit custom mouse move event ont he intersected element.
                intersection.object.el.emit(eventType,{cursorEl:this.el,intersection:intersection,evt:event})
            }
        });
    }
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Checkbox A simple component to listen for two click events in quick succession.
 * @namespace aframe-material-collection
 * @component ui-double-click
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-double-click', {
    schema:{
        timeout:{type:'int',default:200}
    },
    init() {
        let last_click = 0;
        // Add click event for listening for two clicks within the specified timespan.
        this.el.addEventListener('mousedown',e=>{
            let now = new Date().getTime();
            if(now-last_click<this.data.timeout){
                this.el.emit('dblclick',e);
                // Reset last click
                last_click = 0;
                e.preventDefault();
            }
            last_click = now;
        });
    }
});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Rounded borders Component for aframe-material-collection. Expects an a-plane entity.
 * @namespace aframe-material-collection
 * @component ui-border
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-border', {
    schema: {
        borderRadius: {type: 'number', default: 0.01},
        curveSegments:{type: 'int', default: 5},
        borderWidth:{type: 'number', default: 0.008},
        color:{default:"#5f5f5f"},
        numberOfPoints:{type:'int',default:180}
    },
    init() {
        let mesh = this.el.getObject3D('mesh');
        let roundedRectShape = new THREE.Shape();
        this.roundedRect(roundedRectShape,
            mesh.geometry.metadata.parameters.width,
            mesh.geometry.metadata.parameters.height,
            this.data.borderRadius);
        this.roundedRect(roundedRectShape,
            mesh.geometry.metadata.parameters.width-this.data.borderWidth*2,
            mesh.geometry.metadata.parameters.height-this.data.borderWidth*2,
            this.data.borderRadius,true);

        this.el.setObject3D('mesh',new THREE.Mesh( new THREE.ShapeGeometry(roundedRectShape,this.data.curveSegments), new THREE.MeshBasicMaterial( { color: this.data.color } ) ));
    
    },
    roundedRect( ctx, width, height, radius, isHole) {
        let x = -width/2, y = -height/2;
        // Draw the Rounded rectangle shape centered in the object - from three.js shapes example.
        let shapeCtx;
        if(isHole){
            shapeCtx = ctx;
            ctx = new THREE.Path()
        }
        ctx.moveTo( x, y + radius );
        ctx.lineTo( x, y + height - radius );
        ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
        ctx.lineTo( x + width - radius, y + height );
        ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
        ctx.lineTo( x + width, y + radius );
        ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
        ctx.lineTo( x + radius, y );
        ctx.quadraticCurveTo( x, y, x, y + radius );
        if(isHole){
            shapeCtx.holes.push(ctx);
        }
    }
});

/***/ }),
/* 36 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * A component to pick a color - based on https://github.com/mokargas/aframe-colorwheel-component
 * @namespace aframe-material-collection
 * @component ui-renderer
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-color-picker', {
    schema: {
        backingColor:{default:"#dfdfdf"},
        backingColorBottom:{default:"#4db6ac"},
        targetEl:{type:'selector'}
    },
    init() {
        this.setupColorWheel();
        this.setupBrightnessSlider();
        this.setupColorPreview();
        this.setupBacking();
        this.setupEvents();
        this.el.setAttribute('visible',false);
        this.el.setAttribute('scale','0.00001 0.00001 0.00001');
        // Expose methods to open/close the color picker.
        this.el.open = this.open.bind(this);
        this.el.close = this.close.bind(this);
    },
    open(){
        return new Promise(resolve=>{
            this.selectCallback = resolve;
            this.el.setAttribute('visible',true);
            this.tweenPickerScale(0.00001,0.5);
        });
    },
    close(){
        this.tweenPickerScale(0.5,0.00001)
            .then(()=>this.el.setAttribute('visible',false));
    },
    tweenPickerScale(from,to){
        UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
        return new Promise(r=>{
            let _this = this;
            new TWEEN.Tween({x:from})
                .to({x:to}, 250)
                .onUpdate(function(){
                    _this.el.setAttribute('scale',this.x+' '+this.x+' '+this.x);
                })
                .onComplete(()=>{
                    UI.utils.stoppedChanging(this.el.object3D.uuid);
                    r();
                })
                .easing(TWEEN.Easing.Exponential.Out).start();
        });
    },
    setupBacking(){
        let circleBacking = document.createElement('a-circle');
        circleBacking.className = 'no-yoga-layout';
        circleBacking.setAttribute('position','0 0 -0.001');
        circleBacking.setAttribute('material',{
            color: this.data.backingColor,
            flatShading: true,
            shader: 'flat',
            fog: false,
            side: 'double'
        });
        circleBacking.setAttribute('radius',0.65);
        circleBacking.setAttribute('theta-length',180);

        this.el.appendChild(circleBacking);

        let planeBacking = document.createElement('a-plane');
        planeBacking.setAttribute('position','0 -0.375 -0.001');
        planeBacking.className = 'no-yoga-layout';
        planeBacking.setAttribute('material',{
            color: this.data.backingColor,
            flatShading: true,
            shader: 'flat',
            fog: false,
            side: 'double'
        });
        planeBacking.setAttribute('width',1.3);
        planeBacking.setAttribute('height',0.75);

        this.el.appendChild(planeBacking);


        let planeBackingBottom = document.createElement('a-plane');
        planeBackingBottom.setAttribute('position','0 -1.05 -0.001');
        planeBackingBottom.className = 'no-yoga-layout';
        planeBackingBottom.setAttribute('material',{
            color: this.data.backingColorBottom,
            flatShading: true,
            shader: 'flat',
            fog: false,
            side: 'double'
        });
        planeBackingBottom.setAttribute('width',1.3);
        planeBackingBottom.setAttribute('height',0.6);
        this.el.appendChild(planeBackingBottom);

        let buttonConfirm = document.createElement('a-ui-button');
        buttonConfirm.setAttribute('position','0.315 -1.17 0.001');
        buttonConfirm.className = 'intersectable no-yoga-layout';
        buttonConfirm.setAttribute('text-value','SAVE');
        buttonConfirm.setAttribute('color','#ffffff');
        buttonConfirm.setAttribute('wrap-count','9');
        buttonConfirm.setAttribute('ripple-color','#009688');
        buttonConfirm.setAttribute('font-color','#009688');
        buttonConfirm.setAttribute('ripple-size','0.5 0.18');
        buttonConfirm.setAttribute('width',0.5);
        buttonConfirm.setAttribute('height',0.18);
        if(this.data.targetEl)
            this.data.targetEl.addEventListener('mousedown',()=> {
                this.el.open();
            });
        this.el.appendChild(buttonConfirm);
        buttonConfirm.addEventListener('mousedown',e=> {
            let hex = this.getHex();
            this.el.emit('color-selected',hex);
            this.el.close();
            UI.utils.preventDefault(e);
            if(this.data.targetEl){
                this.data.targetEl.setAttribute('color',hex);
            }
            if(this.selectCallback&& typeof this.selectCallback === "function"){
                this.selectCallback(hex);
            }
        });

        let buttonCancel = document.createElement('a-ui-button');
        buttonCancel.setAttribute('position','-0.315 -1.17 0.001');
        buttonCancel.className = 'intersectable no-yoga-layout';
        buttonCancel.setAttribute('text-value','CANCEL');
        buttonCancel.setAttribute('color','#ffffff');
        buttonCancel.setAttribute('wrap-count','9');
        buttonCancel.setAttribute('ripple-color','#ff9800');
        buttonCancel.setAttribute('font-color','#ff9800');
        buttonCancel.setAttribute('ripple-size','0.5 0.18');
        buttonCancel.setAttribute('width',0.5);
        buttonCancel.setAttribute('height',0.18);

        this.el.appendChild(buttonCancel);
        buttonCancel.addEventListener('mousedown',e=> {
            this.el.emit('color-cancelled');
            this.el.close();
            UI.utils.preventDefault(e);
        });
        this.hexValue = document.createElement('a-text');
        this.hexValue.setAttribute('value','#ffffff');
        this.hexValue.setAttribute('align','center');
        this.hexValue.setAttribute('position','0 -0.9 0.001');
        this.hexValue.setAttribute('wrap-count',15);
        this.hexValue.setAttribute('width',1.3);

        this.el.appendChild(this.hexValue);
    },
    setupColorPreview(){
        this.colorPreview = document.createElement('a-circle');
        this.colorPreview.setAttribute('position','-0.45 -0.9 0');
        this.colorPreview.setAttribute('material',{
            color: '#ffffff',
            flatShading: true,
            transparent: true,
            shader: 'flat',
            fog: false,
            side: 'double'
        });
        this.colorPreview.setAttribute('radius',0.05);
        this.el.appendChild(this.colorPreview);
    },
    setupColorWheel(){
        this.hsv = {
            h: 0.0,
            s: 0.0,
            v: 1.0
        };
        this.colorWheel = document.createElement('a-circle');
        this.colorWheel.setAttribute('material',{
            color: '#ffffff',
            flatShading: true,
            transparent: true,
            shader: 'flat',
            fog: false,
            side: 'double'
        });
        this.colorWheel.setAttribute('radius',0.5);
        this.el.appendChild(this.colorWheel);
        this.colorWheel.className = 'intersectable no-yoga-layout';
        this.colorWheel.addEventListener('loaded',()=>{
            let colorWheel = this.colorWheel.getObject3D('mesh');
            let vertexShader = '\n\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n        gl_Position = projectionMatrix * mvPosition;\n      }\n    ';

            let fragmentShader = '\n      #define M_PI2 6.28318530718\n      uniform float brightness;\n      varying vec2 vUv;\n      vec3 hsb2rgb(in vec3 c){\n          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0 );\n          rgb = rgb * rgb * (3.0 - 2.0 * rgb);\n          return c.z * mix( vec3(1.0), rgb, c.y);\n      }\n\n      void main() {\n        vec2 toCenter = vec2(0.5) - vUv;\n        float angle = atan(toCenter.y, toCenter.x);\n        float radius = length(toCenter) * 2.0;\n        vec3 color = hsb2rgb(vec3((angle / M_PI2) + 0.5, radius, brightness));\n        gl_FragColor = vec4(color, 1.0);\n      }\n      ';

            colorWheel.material = new THREE.ShaderMaterial({
                uniforms: {
                    brightness: {
                        type: 'f',
                        value: this.hsv.v
                    }
                },
                vertexShader: vertexShader,
                fragmentShader: fragmentShader
            });
            colorWheel.material.needsUpdate = true;
        })
    },
    setupBrightnessSlider(){
        this.brightnessSlider = document.createElement('a-plane');
        this.brightnessSlider.setAttribute('height',0.1);
        this.brightnessSlider.setAttribute('width',0.8);
        this.brightnessSlider.setAttribute('position','0 -0.6 0');
        this.brightnessSlider.className = 'intersectable no-yoga-layout';
        this.el.appendChild(this.brightnessSlider);
        this.brightnessSlider.addEventListener('loaded',()=>{

            let vertexShader = '\n      varying vec2 vUv;\n      void main(){\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n      }\n    ';

            let fragmentShader = '\n      uniform vec3 color1;\n      uniform vec3 color2;\n      varying vec2 vUv;\n\n      void main(){\n        vec4 c1 = vec4(color1, 1.0);\n  \t    vec4 c2 = vec4(color2, 1.0);\n\n        vec4 color = mix(c2, c1, smoothstep(0.0, 1.0, vUv.x));\n        gl_FragColor = color;\n      }\n    ';


            this.brightnessSlider.getObject3D('mesh').material = new THREE.ShaderMaterial({
                uniforms: {
                    color1: {
                        type: 'c',
                        value: new THREE.Color(0xFFFFFF)
                    },
                    color2: {
                        type: 'c',
                        value: new THREE.Color(0x000000)
                    }
                },
                vertexShader: vertexShader,
                fragmentShader: fragmentShader
            });
            this.brightnessSlider.getObject3D('mesh').material.needsUpdate = true;
        });
        let brightnessResetLeft = document.createElement('a-triangle');
        brightnessResetLeft.setAttribute('vertex-a','0 0.05 0');
        brightnessResetLeft.setAttribute('vertex-b','-0.05 -0.05 0');
        brightnessResetLeft.setAttribute('vertex-c','0.05 -0.05 0');
        brightnessResetLeft.setAttribute('position','-0.475 -0.6 0');
        brightnessResetLeft.setAttribute('rotation','0 0 90');
        brightnessResetLeft.setAttribute('shader','flat');
        brightnessResetLeft.setAttribute('color','#009688');
        brightnessResetLeft.setAttribute('ui-btn','');
        brightnessResetLeft.className = 'intersectable';
        this.el.appendChild(brightnessResetLeft);


        let brightnessResetRight = document.createElement('a-triangle');
        brightnessResetRight.setAttribute('vertex-a','0 0.05 0');
        brightnessResetRight.setAttribute('vertex-b','-0.05 -0.05 0');
        brightnessResetRight.setAttribute('vertex-c','0.05 -0.05 0');
        brightnessResetRight.setAttribute('position','0.475 -0.6 0');
        brightnessResetRight.setAttribute('rotation','0 0 -90');
        brightnessResetRight.setAttribute('color','#009688');
        brightnessResetRight.setAttribute('shader','flat');
        brightnessResetRight.setAttribute('ui-btn','');
        brightnessResetRight.className = 'intersectable';
        this.el.appendChild(brightnessResetRight);

        brightnessResetLeft.addEventListener('mousedown',()=>{

            UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
            this.colorWheel.getObject3D('mesh').material.uniforms['brightness'].value = 0;
            this.hsv.v = 0;
            this.hsv.h = 0;
            this.hsv.s = 0;
            this.updateColor();
            UI.utils.stoppedChanging(this.el.object3D.uuid);
        });
        brightnessResetRight.addEventListener('mousedown',()=>{

            UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
            this.colorWheel.getObject3D('mesh').material.uniforms['brightness'].value = 1;
            this.hsv.v = 1;
            this.hsv.h = 0;
            this.hsv.s = 0;
            this.updateColor();
            UI.utils.stoppedChanging(this.el.object3D.uuid);
        });
    },
    getHex(){
        let rgb = this.hsvToRgb(this.hsv),
            color = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
        return '#' + new THREE.Color(color).getHexString()
    },
    updateColor(){
        let hex = this.getHex();
        this.colorPreview.setAttribute('color',hex);
        this.hexValue.setAttribute('value',hex);
    },
    setupEvents(){
        this.colorWheel.addEventListener('mousedown',e=>{
            this.isMouseDown = true;
            UI.utils.preventDefault(e);
        });
        this.colorWheel.addEventListener('mouseup',e=>{
            this.isMouseDown = false;
            UI.utils.preventDefault(e);
        });
        this.colorWheel.addEventListener('ui-mousemove',e=>{
            if(!this.isMouseDown)return;
            UI.utils.preventDefault(e);

            UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
            let colorWheel = this.colorWheel.getObject3D('mesh'),
                radius = 0.5,
                position = e.detail.intersection.point;

            colorWheel.updateMatrixWorld();
            colorWheel.worldToLocal(position);

            //Determine Hue and Saturation value from polar co-ordinates
            let polarPosition = {
                r: Math.sqrt(position.x * position.x + position.y * position.y),
                theta: Math.PI + Math.atan2(position.y, position.x)
            };

            let angle = (polarPosition.theta * (180 / Math.PI) + 180) % 360;
            this.hsv.h = angle / 360;
            this.hsv.s = polarPosition.r / radius;
            this.updateColor();
            UI.utils.stoppedChanging(this.el.object3D.uuid);
        });
        this.brightnessSlider.addEventListener('mousedown',e=>{
            this.isMouseDown = true;
            UI.utils.preventDefault(e);
        });
        this.brightnessSlider.addEventListener('mouseup',e=>{
            this.isMouseDown = false;
            UI.utils.preventDefault(e);
        });
        this.brightnessSlider.addEventListener('ui-mousemove',e=>{

            UI.utils.preventDefault(e);
            UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
            if(!this.isMouseDown)return;
            let brightnessSlider = this.brightnessSlider.getObject3D('mesh'),
                colorWheel = this.colorWheel.getObject3D('mesh'),
                position = e.detail.intersection.point;

            brightnessSlider.updateMatrixWorld();
            brightnessSlider.worldToLocal(position);

            //Brightness is a value between 0 and 1. The parent plane is centre registered, hence offset
            let cursorOffset = position.x + 0.4;//this.brightnessSliderHeight / 2;
            let brightness = cursorOffset / 0.8;//this.brightnessSliderHeight;

            //Update material brightness
            colorWheel.material.uniforms['brightness'].value = brightness;
            this.hsv.v = brightness;
            this.updateColor();
            UI.utils.stoppedChanging(this.el.object3D.uuid);
        });
    },
    hsvToRgb(hsv) {
        let r, g, b, i, f, p, q, t;
        let h = THREE.Math.clamp(hsv.h, 0, 1);
        let s = THREE.Math.clamp(hsv.s, 0, 1);
        let v = hsv.v;

        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }
});



/***/ }),
/* 37 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Modal Component for aframe-material-collection.
 * @namespace aframe-material-collection
 * @component ui-modal
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-modal', {
    schema: {
        modal:{type:'selector'},
        main:{type:'selector'}
    },
    init(){
        if(this.data.modal&&this.data.main){
            // Get the modal panel to be able to animate its scale on open/close.
            this.modalPanel = document.querySelector(this.data.modal.getAttribute('ui-panel'));

            this.mainComponents = this.data.main.components;
            this.modalComponents = this.data.modal.components;
            // Pause rendering of modal until opened.
            if(this.modalComponents&&this.modalComponents['ui-renderer']){
                this.modalComponents['ui-renderer'].pause();
            }
            // Setup close listeners for anything with the class close-modal.
            let close_buttons = this.data.modal.querySelectorAll('.close-modal');
            for(let i = 0; i < close_buttons.length; i++ ){
                let close_button = close_buttons[i];
                close_button.addEventListener('mousedown',()=>{
                    this.close();
                });
            }
            // Add click handler for opening the modal, pause the main render screen and play the modal renderer
            this.openModal = this.open.bind(this);
            this.el.addEventListener('mousedown',this.openModal);
            this.data.main.modal = this;

            // Expose methods to open/close the modal.
            this.el.open = this.open.bind(this);
            this.el.close = this.close.bind(this);
        }
    },
    remove(){
        this.el.removeEventListener('mousedown',this.openModal);
    },
    open(){
        if(this.mainComponents&&this.mainComponents['ui-renderer']){
            this.mainComponents['ui-renderer'].pauseRender();
            this.tweenModalScale(0.0000001,1);
            this.modalComponents['ui-renderer'].play();
        }
    },
    close(){
        // Pause the modal rendering and play the main rendering again.
        this.modalComponents['ui-renderer'].pause();
        this.mainComponents['ui-renderer'].play();
        this.mainComponents['ui-renderer'].playRender();
        this.tweenModalScale(1,0.0000001)
            .then(()=>{
                this.el.sceneEl.emit('modal-closed');
            });
    },
    tweenModalScale(from,to){
        return new Promise(r=>{
            let _this = this;
            new TWEEN.Tween({x:from})
                .to({x:to}, 250)
                .onUpdate(function(){
                    if(_this.modalPanel)
                        _this.modalPanel.setAttribute('scale',this.x+' '+this.x+' '+this.x);
                })
                .onComplete(r)
                .easing(TWEEN.Easing.Exponential.Out).start();
        });
    }
});

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.js
class Utils{
    constructor(){
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
    isFirstOrLastChange(){
        let empty = true;

        for(let key in this.changesDetected) {
            empty = false;
            break;
        }

        if(!this.is_changeing&&!empty){
            this.scene.emit('ui-changing');
            this.is_changeing = true;
        }else if(this.is_changeing&&empty){
            if(this.is_changeing){
                this.scene.emit('ui-changing-stopped');
                this.is_changeing = false;
            }
        }
    }
    preventDefault(e){
        if(e.detail && e.detail.preventDefault && typeof e.detail.preventDefault === "function"){
            e.detail.preventDefault();
        }
    }
    shorten(string,length){
        return string.length>length?string.substr(0,length)+"...":string;
    }
    ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    isChanging(scene,ref){
        let index = this.changesDetected[ref];
        if(!index){
            this.scene = this.scene||scene;
            let now = new Date().getTime();
            this.changesDetected[ref] = {t:now};
            this.isFirstOrLastChange();
        }else{
            this.changesDetected[ref].t = new Date().getTime();
        }
    }
    stoppedChanging(ref){
        delete this.changesDetected[ref];
        this.isFirstOrLastChange();
    }
    copyToClipboard(text){
        navigator.clipboard.writeText(text).then(()=>{
        },(err)=> {
            console.error('copy to clipboard failed:', err);
        });
    }
    clearObject(object){
        object.traverse(child=>{
            if(child.material) {
                if(child.material.length){
                    for(let i =0; i < child.material.length; i++){
                        if(child.material[i].map){
                            child.material[i].map.dispose();
                        }
                        child.material[i].dispose();
                    }
                }else{
                    if(child.material.map){
                        child.material.map.dispose();
                    }
                    child.material.dispose();
                }
            }
            if(child.geometry){
                child.geometry.dispose();
            }
        });
    }
}
// CONCATENATED MODULE: ./src/index.js
/* global AFRAME */
/**
 * Application entry point
 * @author Shane Harris
 */


let version = __webpack_require__(24).version;
console.log('aframe-material-collection version '+version);

if (typeof AFRAME === 'undefined') {
    throw 'aframe-material-collection requires AFRAME to be loaded first. - <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>';
}
let utils = new Utils();

window.UI = {
    // Utils
    utils:utils,
    // Primitives
    a_ui_button: __webpack_require__(0),
    a_ui_fab_button: __webpack_require__(1),
    a_ui_fab_button_small: __webpack_require__(2),
    a_ui_switch: __webpack_require__(3),
    a_ui_slider: __webpack_require__(4),
    a_ui_number: __webpack_require__(5),
    a_ui_toast: __webpack_require__(6),
    a_ui_checkbox: __webpack_require__(7),
    a_ui_radio: __webpack_require__(8),
    a_ui_input_text: __webpack_require__(9),
    a_ui_text_input: __webpack_require__(25),
    a_ui_number_input: __webpack_require__(26),
    a_ui_int_input: __webpack_require__(27),
    a_ui_password_input: __webpack_require__(28),
    a_ui_scroll_pane: __webpack_require__(10),
    a_ui_renderer: __webpack_require__(11),

    // Components
    text: __webpack_require__(29),
    input_text: __webpack_require__(12),
    btn: __webpack_require__(13),
    icon: __webpack_require__(30),
    rounded: __webpack_require__(31),
    ripple: __webpack_require__(32),
    slider: __webpack_require__(14),
    number: __webpack_require__(15),
    switch: __webpack_require__(16),
    toast: __webpack_require__(17),
    scroll_pane: __webpack_require__(18),
    mouse_shim: __webpack_require__(33),
    double_click: __webpack_require__(34),
    checkbox: __webpack_require__(19),
    radio: __webpack_require__(20),
    border: __webpack_require__(35),
    curvedPlane: __webpack_require__(21),
    colorPicker: __webpack_require__(36),
    modal: __webpack_require__(37),
    renderer: __webpack_require__(22),
    yoga_properties: __webpack_require__(23),
};
//module.exports = UI;



/***/ })
/******/ ]);
//# sourceMappingURL=aframe-material-collection.js.map