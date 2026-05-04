import express from "express";
import Violation from "../models/Violation.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
import { exec } from "child_process";

const router = express.Router();

// ================= CREATE VIOLATION =================
router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    const { vehicleNumber, violationType, fineAmount, issuedTo } = req.body;

    // ✅ Role check
    if (!["police", "admin"].includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    // ✅ Image path
    const image = req.file ? req.file.path : "";

    // ✅ AI Detection (Helmet / No Helmet)
    if (image) {
      exec(`python ai/detect.py ${image}`, (err, stdout) => {
        if (err) {
          console.log("AI error:", err);
        } else {
          console.log("AI Result:", stdout.trim());
        }
      });
    }

    // ✅ Save violation
   const violation = new Violation({
  vehicleNumber,
  violationType,
  fineAmount,
  issuedTo,
  issuedBy: req.user.id, // ✅ FIX
  image,
});

    await violation.save();

    res.status(201).json({
      message: "Violation created",
      violation,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ================= GET VIOLATIONS =================
router.get("/", protect, async (req, res) => {
  try {
    let violations;

    if (req.user.role === "citizen") {
      // citizen sees only their violations
      violations = await Violation.find({ issuedTo: req.user.id });
    } else {
      // police/admin sees all
      violations = await Violation.find();
    }

    res.json({ violations });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;