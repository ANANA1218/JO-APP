import express from 'express';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';
import * as AuthController from '../controllers/authController.js';

const router = express.Router();

// Login route
router.post('/login', AuthController.login);

// Logout route
router.get('/logout', AuthController.logout);

export default router;
