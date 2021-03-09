/* global AFRAME,THREE */
/**
 * A component to load an icon and set some defaults for positioning and transparency.
 * @namespace aframe-material-collection
 * @component ui-icon
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent("ui-icon", {
	schema: {
		src: { default: "" },
		size: { type: "vec2", default: { x: 0.1, y: 0.1 } },
		zIndex: { type: "number", default: 0.003 },
		color: { default: "#fff" },
		iconmesh: {default: "circle"}

	},
	init() {

		/*	this.icon = new THREE.Mesh(
				new THREE.PlaneGeometry( this.data.size.x, this.data.size.y ),
				new THREE.MeshBasicMaterial( { color: this.data.color, alphaTest: 0.4, transparent: true, map: new THREE.TextureLoader().load( this.data.src ) } )
			);
			this.icon.position.set( 0, 0, this.data.zIndex );
			this.el.object3D.add( this.icon );
	*/


	}

	,
	update() {

		const textureLoader = new THREE.TextureLoader().load(this.data.src)
		const material = new THREE.MeshBasicMaterial({ color: this.data.color, alphaTest: 0.4, transparent: true, map: textureLoader })

		textureLoader.dispose();
		console.error(this.data.iconmesh)
		if (this.data.iconmesh == "circle")
		this.icon = new THREE.Mesh(
			new THREE.CircleGeometry(this.data.size.x/2.5, 32),
			material
		);
		else 
		this.icon = new THREE.Mesh(
			new THREE.PlaneGeometry(this.data.size.x, this.data.size.y),
			material
		);
		this.icon.position.set(0, 0, this.data.zIndex);
		this.el.object3D.add(this.icon);
		


	},
	remove() {
		this.el.object3D.remove(this.el.object3D)
	
		this.icon.geometry.dispose();
		this.icon.material.map.dispose();
		this.icon.material.dispose();
	    this.icon = null; 
		this.el.remove("ui-icon")
		




	}
});
