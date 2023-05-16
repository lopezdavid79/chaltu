const router = require("express").Router();
const productoController = require("../controller/productosController");

router.get('/',productoController.home)
router.get('/products/list',productoController.list);

router.get('/create',productoController.create);

router.post('/create',productoController.stock);

/*** DETAIL ONE PRODUCT ***/ 
router.get("/products/:id", productoController.detail)
router.delete('/:id', productoController.destroy)

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productoController.editProd)
router.patch('/:id', productoController.update);



module.exports = router;
