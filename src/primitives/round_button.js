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
