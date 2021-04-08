/* global AFRAME,THREE */
/**
 * A component to load an icon and set some defaults for positioning and transparency.
 * @namespace aframe-material-collection
 * @component ui-icon
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent( "ui-icon", {
	schema: {
		src: { default: "" },
		size: { type: "vec2", default: { x: 0.1, y: 0.1 } },
		width:  { type: "number", default: 0.1 },
		height:  { type: "number", default: 0.1 },
		zIndex: { type: "number", default: 0.0001 },
		color: { default: "#fff" },
		iconmesh: { default: "circle" },
		radius: { type: "number", default: 0.03 },

	},
	init() {

		//this._manager = new THREE.LoadingManager();
        //this._loader = new THREE.TextureLoader(this._manager);

	},

	update() {

const Mesh = this.el.object3D.getObjectByProperty( "type", "Mesh" )





		//this.el.setAttribute( "a-image", "src", this.data.src );
		const textureMap  =  new THREE.TextureLoader().load( this.data.src );
		let width, height;
        if (Mesh.geometry.boundingBox)  {

		   width = Mesh.geometry.boundingBox.max.x
			height = Mesh.geometry.boundingBox.max.y
		}

		else {
			width = this.data.width;
			height = this.data.height;

		}
         




		//const material = new THREE.MeshBasicMaterial( { emissive:this.data.color, alphaTest: 0.4, transparent: false, map: textureMap } );
		
		const material = new THREE.MeshBasicMaterial({ transparent: true, map: textureMap } );
		
		material.onUpdate = function () {

			// Delete texture data once it has been uploaded to the GPU

			material.mipmaps.length = 0;

		};

		if ( this.data.iconmesh == "circle" )
			this.icon = new THREE.Mesh(
				new THREE.CircleGeometry( this.data.radius , 32 ),
				material,
			);
		else
			this.icon = new THREE.Mesh(
				new THREE.PlaneGeometry( width, height ),
				material,
			);


		this.icon.position.set( 0, 0, this.data.zIndex );
		this.el.object3D.add( this.icon );

	},
	remove() {

		this.el.object3D.remove( this.el.object3D );
	
		this.icon.geometry.dispose();
		this.icon.material.map.dispose();
		this.icon.material.dispose();
	    this.icon = null;
		this.el.remove( "ui-icon" );

	},
} );
