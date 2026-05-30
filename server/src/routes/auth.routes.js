import { Router } from "express";
import { getProfile, login, refreshToken, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.get("/profile", authMiddleware, getProfile);

export default router;
