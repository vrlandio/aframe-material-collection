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
			//   "ui-rounded": { borderRadius: 0.0025 },
			//   "ui-ripple": { size: { x: 0.5, y: 0.175 }, clampToSquare: true, zIndex: 0.001 },
			"troika-text": {
				align: "center",
				depthOffset: -6000,
				wrapCount: 10,
				value: "a",
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
