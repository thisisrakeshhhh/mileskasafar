import express from "express";
import cors from "cors";
import apiRoutes from "./routes/index.js";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONTEND_URL || "http://localhost:5173",
      credentials: true
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/health", (_req, res) => {
    res.json({ success: true, message: "Miles Ka Safar API is running" });
  });

  app.use("/api", apiRoutes);

  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ success: false, message: err.message || "Internal server error" });
  });

  return app;
}
