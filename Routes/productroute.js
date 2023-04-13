import express from 'express';
const router =express.Router();
import controller from '../Controllers/productcontroller.js';
 router.get ('/',controller.getAllProduct);
 router.get('/:id',controller.getProduct);
 router.post('/',controller.addProduct);
 router.put('/:id',controller.putProduct);
router.delete('/:id',controller.deleteProduct)


export default router;