import express from 'express';

import { signin, signup, forgotPassword, resetPassword, getSingleUser, getAllUsers } from '../controllers/user.js';
import {checkUserExist} from '../middleware/database/databaseErrorHelpers.js'

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post("/forgotpassword", forgotPassword);

router.put("/resetpassword", resetPassword);

router.get("/",getAllUsers);
router.get("/:id",checkUserExist, getSingleUser);

export default router;