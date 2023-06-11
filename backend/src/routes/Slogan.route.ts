import express from 'express';
import { addSlogan, getAllSlogans, getSlogan } from '../controller/Slogan';

const router = express.Router()

router.get('', getSlogan)
router.get('/all', getAllSlogans)
router.post('', addSlogan)

export default router;