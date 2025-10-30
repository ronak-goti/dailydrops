import express from "express";
import { testController } from "../controllers/testController.js";

const router = express.Router();

// Example API route
router.get("/test", testController);

export default router;
