const express = require('express');
const router = express.Router();
const authenticateToken = require('../authenticateToken');


router.get("/", authenticateToken, (req, res) => {
    res.send("Working from Form");
  });


router.post("/", authenticateToken, (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: "body must have the property text" });
    }
  
    res.json({ text });
  });














module.exports = router;