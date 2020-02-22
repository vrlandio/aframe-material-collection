/* global AFRAME */
/**
 * Application entry point
 * @author Shane Harris
 */
import { Utils } from "./utils";

let version = require( "./../package.json" ).version;
console.log( "aframe-material-collection version " + version );

if ( typeof AFRAME === "undefined" ) {

	throw 'aframe-material-collection requires AFRAME to be loaded first. - <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>';

}
let utils = new Utils();

window.UI = {
	// Utils
	utils: utils,
	// Primitives
	a_ui_button: require( "./primitives/button" ),
	a_ui_fab_button: require( "./primitives/fab_button" ),
	a_ui_fab_button_small: require( "./primitives/fab_button_small" ),
	a_ui_switch: require( "./primitives/switch" ),
	a_ui_slider: require( "./primitives/slider" ),
	a_ui_number: require( "./primitives/number" ),
	a_ui_toast: require( "./primitives/toast" ),
	a_ui_checkbox: require( "./primitives/checkbox" ),
	a_ui_radio: require( "./primitives/radio" ),
	a_ui_input_text: require( "./primitives/input-text" ),
	a_ui_text_input: require( "./primitives/text-input" ),
	a_ui_number_input: require( "./primitives/number-input" ),
	a_ui_int_input: require( "./primitives/int-input" ),
	a_ui_password_input: require( "./primitives/password-input" ),
	a_ui_scroll_pane: require( "./primitives/scroll-pane" ),
	a_ui_renderer: require( "./primitives/renderer" ),

	// Components
	text: require( "./components/text" ),
	input_text: require( "./components/input-text" ),
	btn: require( "./components/btn" ),
	icon: require( "./components/icon" ),
	rounded: require( "./components/rounded" ),
	ripple: require( "./components/ripple" ),
	slider: require( "./components/slider" ),
	number: require( "./components/number" ),
	switch: require( "./components/switch" ),
	toast: require( "./components/toast" ),
	scroll_pane: require( "./components/scroll-pane" ),
	mouse_shim: require( "./components/mouse-shim" ),
	double_click: require( "./components/double-click" ),
	checkbox: require( "./components/checkbox" ),
	radio: require( "./components/radio" ),
	border: require( "./components/border" ),
	curvedPlane: require( "./components/curved-plane" ),
	colorPicker: require( "./components/color-picker" ),
	modal: require( "./components/modal" ),
	renderer: require( "./components/renderer" )
};
//module.exports = UI;
