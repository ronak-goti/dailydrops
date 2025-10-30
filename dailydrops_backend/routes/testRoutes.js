import express from "express";
import { db } from "../config/firebase.js";

const router = express.Router();

router.get("/test-firebase", async (req, res) => {
  try {
    const testDoc = db.collection("test").doc("serverCheck");
    await testDoc.set({
      status: "connected",
      time: new Date().toISOString(),
    });
    res.send("✅ Firebase connected successfully!");
  } catch (error) {
    console.error("❌ Firebase connection failed:", error);
    res.status(500).send("Firebase connection failed");
  }
});

export default router;
