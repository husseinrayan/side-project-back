import express from 'express';
const router =express.Router();
import controller from '../Controllers/categorycontroller.js';
 router.get ('/',controller.getAllCategory);
 router.get('/:id',controller.getCategory);
 router.post('/',controller.addCategory);
 router.put('/:id',controller.putCategory);
router.delete('/:id',controller.deleteCategory)


export default router;