/* global AFRAME,THREE */
/**
 * A component to load an icon and set some defaults for positioning and transparency.
 * @namespace aframe-material-collection
 * @component ui-icon
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent( "ui-icon", {
	schema: {
		src: { default: "icons/send_white_64dp.png" },
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
     this.icon = null;

	}

	,
	update() {
		this.icon = new THREE.Mesh(
			new THREE.PlaneGeometry( this.data.size.x, this.data.size.y ),
			new THREE.MeshBasicMaterial( { color: this.data.color, alphaTest: 0.4, transparent: true, map: new THREE.TextureLoader().load( this.data.src ) } )
		);
		this.icon.position.set( 0, 0, this.data.zIndex );
		this.el.object3D.add( this.icon );
	
		
	},
	remove() {
		this.el.removeObject3D( "mesh" );
		this.icon.geometry.dispose();
        this.icon.material.dispose();
	  
		this.el.object3D.remove(this.icon)
		this.el.remove(this.icon)
		delete this.icon

	}
} );
