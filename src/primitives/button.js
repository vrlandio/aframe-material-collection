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
			"notroika-text": {
				align: "left",
		     	depthOffset: -6000,
				wrapCount: 10,
				fontSize: 0.015,
			
			},
			"box-rounded": {
				width: 0.03,
				height: 0.01,
				depth: 0.01,
				color: 0xff0000,
				curveSegments: 13,
				borderRadius: 0.01,
				material: "standard",
				envMapIntensity: 0.75,
				transparent: false,
				
			},
			
			"ui-btn": {
				animated: "ui-btn.animated",
			},

			
		
			
		},
		mappings: {
			height: "box-rounded.height",
			width: "box-rounded.width",
			depth: "box-rounded.depth",
			color: "box-rounded.color",
			transparent: "box-rounded.transparent",
			
            "text-value": "troika-text.value",
			"text-size": "troika-text.fontSize",
			"text-color": "troika-text.color",
		
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
			disabled: "ui-btn.disabled",
			"hover-height": "ui-btn.hoverHeight",
			"active-height": "ui-btn.activeHeight"
		}
	} )
);


module.exports = AFRAME.registerPrimitive(
	"a-ui-button-tooltip",
	AFRAME.utils.extendDeep( {}, AFRAME.primitives.getMeshMixin(), {
		defaultComponents: {
		
		
			"ui-btn": {},
			"box-rounded": {
				width: 0.03,
				height: 0.01,
				depth: 0.01,
				color: 0xff0000,
				curveSegments: 13,
				borderRadius: 0.01,
				material: "standard",
				envMapIntensity: 0.75,
				transparent: false,
				
			},
			
		},
		mappings: {
			height: "box-rounded.height",
			width: "box-rounded.width",
			depth: "box-rounded.depth",
			color: "box-rounded.color",
			transparent: "box-rounded.transparent",
			
            "text-value": "troika-text.value",
			"text-size": "troika-text.fontSize",
			"text-color": "troika-text.color",
			animated: "ui-btn.animated",
			courser2d: "ui-btn.courser2d",
		
		
		
			tooltip: "ui-btn.tooltip",
			tooltiptext:"ui-btn.tooltiptext",
		}
	} )
);
