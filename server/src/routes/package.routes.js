import { Router } from "express";
import { createPackage, deletePackage, getAllPackages, getPackageById, updatePackage } from "../controllers/package.controller.js";
import { adminMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", getAllPackages);
router.get("/:id", getPackageById);
router.post("/", adminMiddleware, createPackage);
router.put("/:id", adminMiddleware, updatePackage);
router.delete("/:id", adminMiddleware, deletePackage);

export default router;
