import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { createApp } from "./app.js";

dotenv.config();

async function bootstrap() {
  await connectDB();
  const app = createApp();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Miles Ka Safar API listening on port ${port}`);
  });
}

bootstrap().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
