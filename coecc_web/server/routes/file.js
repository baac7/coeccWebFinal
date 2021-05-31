import express from 'express';


import { getFile, createFile, updateFile, deleteFile} from '../controllers/file.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getFile);
router.post('/', auth, createFile);
router.patch('/:id', auth, updateFile);
router.delete('/:id', auth, deleteFile);

export default router;
