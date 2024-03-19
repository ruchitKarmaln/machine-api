import { Router } from "express";
const router = Router();
import userController from "./userController.js";

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

export default router;
