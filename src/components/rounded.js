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

		let mesh = this.el.getObject3D( "mesh" );
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

		// Emit rounded-loaded event once the geometry has been updated.
		this.el.emit( "rounded-loaded", null, false );

	}
} );
