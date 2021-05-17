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

			"box-rounded": { width: 0.03,
				height: 0.01,
				depth: 0.01,
				color: "#000111",
				curveSegments: 13,
				borderRadius: 0.01,
				material: "standard",
				depth: 0.02,
				envMapIntensity: 0.4,
			},

			"ui-btn": {
				animated: "ui-btn.animated",
			},

			"troika-text": {
				align: "center",
				depthOffset: - 6000,
				wrapCount: 10,
				fontSize: 0.015,
			},
			"ui-icon": {
				zIndex: 0.02,
			},

		},
		mappings: {
			"height": "box-rounded.height",
			"width": "box-rounded.width",
			"depth": "box-rounded.depth",
			"color": "box-rounded.color",
			"transparent": "box-rounded.transparent",

			"text-value": "troika-text.value",
			"src": "ui-icon.src",
			"animated": "ui-btn.animated",
			"courser2d": "ui-btn.courser2d",
			"disabled": "ui-btn.disabled",
			"hover-height": "ui-btn.hoverHeight",
			"active-height": "ui-btn.activeHeight",
		},
	} ),
);

module.exports = AFRAME.registerPrimitive(
	"a-ui-icon-button-new",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {

			"box-rounded": {

				color: "#000111",
				curveSegments: 16,
				borderRadius: 0.005,
				material: "standard",
				depth: 0.02,
				envMapIntensity: 0.5,
				transparent: false,

			},

			"ui-icon": {
				zIndex: 0.006,
				iconmesh: "plane",
				size: { x: 1.45, y: 0.95 },
				width: 1,
				height: 1,
			},

		},
		mappings: {
			"height": "box-rounded.height",
			"width": "box-rounded.width",

			"depth": "box-rounded.depth",
			"color": "box-rounded.color",
			"transparent": "box-rounded.transparent",

			"src": "ui-icon.src",
			"animated": "ui-btn.animated",
			"courser2d": "ui-btn.courser2d",
			"disabled": "ui-btn.disabled",
			"hover-height": "ui-btn.hoverHeight",
			"active-height": "ui-btn.activeHeight",

		},
	} ),
);
