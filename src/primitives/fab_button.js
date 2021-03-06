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
				radius: 0.075,
				segments: 256
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
			"icon-mesh": "ui-icon.iconmesh",
			// "ripple-color": "ui-ripple.color",
			// "ripple-size": "ui-ripple.size",
			// "ripple-z-index": "ui-ripple.zIndex",
			disabled: "ui-btn.disabled",
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
			tooltip: "ui-btn.tooltip",
		}
	} )
);
