const express = require("express");
const router = express.Router();
const Support = require("../models/Support");

router.post("/", async (req, res) => {
  try {
    const newRequest = new Support(req.body);
    await newRequest.save();
    res.status(201).json({ message: "Support request submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
