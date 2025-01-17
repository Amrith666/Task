import express from 'express';
import { addAdmin, adminLogin, getAdmins } from '../controllers/Admin-controller.js';

const adminRouter = express.Router();

adminRouter.post('/signup',addAdmin);
adminRouter.post('/login', adminLogin);
adminRouter.get('/', getAdmins)

export default adminRouter;