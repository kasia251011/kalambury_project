import express from 'express';
import { addCategory, getCategories, getCategory, updateCategory } from '../controller/Category';

const router = express.Router()

router.get('/:id', getCategory)
router.get('', getCategories)
router.post('', addCategory)
router.put('', updateCategory)

export default router;