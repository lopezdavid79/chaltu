
const fs = require('fs');
const path = require('path');
const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productosController = {
    list: (req,res) => {
        res.render('productos/list',{title:"Chaltu Bags Productos ",productos})
    },
    // detail:(req,res)=>{
    //     let id=req.params.id;//devuelve el parametro id del la url.
    //     let producto = productos.find(product=>product.id==id)
    //     res.render("productos/detailProduct", {producto });
    // },
    
    create: (req,res) => {
        res.render('productos/creacionProd',{title:"Crear Producto"});
    },
    stock: (req,res) => {
        const {articulo,modelo,descripcion,precio} = req.body;
        const newProduct = {
            id: productos.length + 1,
            articulo,
            modelo,
            descripcion,
            precio
        }
        productos.push(newProduct);
        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "))
        res.redirect('/productos');
    },
/* editar Producto */
    
    editProd: (req, res) => {
    let id = req.params.id
    let editProduct = productos.find(producto => producto.id == id)
    res.render("productos/edit", {title:"editar Producto", editProduct })
    },
    update: (req, res) => {
        let id = req.params.id 
        let editProduct =   productos.find(producto => producto.id == id) //El producto que se va a editar
        editProduct = {
            id: editProduct.id,
           ...req.body,
            
            
            articulo:  editProduct.articulo,
            modelo: editProduct.modelo,
            descripcion: editProduct.descripcion,
            precio: editProduct.precio
           
        }; 

    let newProducts = productos.map(producto => {    
                                                     
      if (producto.id === editProduct.id) {
            return producto = { ...editProduct };  
                } 
            return producto;            
        })
        fs.writeFileSync(productosFilePath, JSON.stringify(newProducts, null, ' '));
            res.redirect("/" + editProduct.id)
       
       console.log(editProduct.articulo)
     },
    /* eliminar producto */
    destroy: (req, res) => {
		let id = req.params.id 
		let finalProducts = productos.filter(producto => producto.id != id) 

  		fs.writeFileSync(productosFilePath, JSON.stringify(finalProducts, null, ' ')); 
                 
        res.redirect("/productos/list");
        
	},
    detail: (req, res) => {
		let idProduct = req.params.id;
		let product = productos.find(product => product.id == idProduct)
	    res.render("productos/detail", {id:product.id,product})
     }

}

module.exports = productosController;