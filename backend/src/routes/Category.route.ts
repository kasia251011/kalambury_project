import express from 'express';
import { addCategory, getCategories, getCategory } from '../controller/Category';

const router = express.Router()

router.get('/:id', getCategory)
router.get('', getCategories)
router.post('', addCategory)

export default router;