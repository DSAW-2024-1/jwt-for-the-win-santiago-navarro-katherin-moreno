const express = require('express');
const router = express.Router();
const authenticateToken = require('../authenticateToken');

router.get("/", authenticateToken, (req, res) => {
    res.send("Working from profile");
  });


const userData = {
    firstName: "Pedro",
    lastName: "Paramo",
    email: "admin@admin.com",
    dateOfBirth: "1990-01-01"
};


router.get('/', authenticateToken, (req, res) => {
    res.json(userData);
});









module.exports = router;



