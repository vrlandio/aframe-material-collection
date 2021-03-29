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
			"ui-icon": {
				zIndex: 0.005,
				iconmesh: "circle",
				size: {x:0.1,y:0.1},
				width: 0.01,
				height: 0.01,
				radius: 0.01,
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
			"icon-mesh": "ui-icon.iconmesh",
			//  "ripple-color": "ui-ripple.color",
			//  "ripple-size": "ui-ripple.size",
			//"ripple-z-index": "ui-ripple.zIndex",
			disabled: "ui-btn.disabled",
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
		}
	} )
);
