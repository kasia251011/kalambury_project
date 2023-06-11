import express from 'express';
import { addCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../controller/Category';

const router = express.Router()

router.get('/:id', getCategory)
router.get('', getCategories)
router.post('', addCategory)
router.put('', updateCategory)
router.delete('/:id', deleteCategory)

export default router;