const router = require("express").Router();
const productoController = require("../controller/productosController");





router.get('/list',productoController.list);
router.get('/:id',productoController.detail);
router.get('/create',productoController.create);

router.post('/create',productoController.stock);
/* editar productos */
router.get('/:id/edit',productoController.editProd );
router.patch('/:id', productoController.update);
/* eliminar producto  */
router.delete('/:id',productoController.destroy)

module.exports = router;