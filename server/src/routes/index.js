import { Router } from "express";
import authRoutes from "./auth.routes.js";
import packageRoutes from "./package.routes.js";
import bookingRoutes from "./booking.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/packages", packageRoutes);
router.use("/bookings", bookingRoutes);

export default router;
