import express from 'express';
import { addSlogan, deleteSlogan, getAllSlogans, getAllSlogansByCategory, getSlogan, updateSlogan } from '../controller/Slogan';

const router = express.Router()

router.get('', getSlogan)
router.get('/all', getAllSlogans)
router.get('/:id', getAllSlogansByCategory)
router.post('', addSlogan)
router.put('', updateSlogan)
router.delete('/:id', deleteSlogan)

export default router;