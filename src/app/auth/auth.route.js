import { Router } from 'express';
import * as authController from './controller/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', authController.register);
authRouter.patch('/verify', authController.verifyOtp);
authRouter.post('/signin', authController.signIn);
authRouter.post('/send-otp', authController.sendOtp);
authRouter.patch('/reset-pass', authController.forgetPassword);
authRouter.post('/login-with-google', authController.loginWithGoogle);

export default authRouter;