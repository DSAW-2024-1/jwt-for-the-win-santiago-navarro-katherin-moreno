require('dotenv').config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticateToken = require('../authenticateToken');


const users = [
    { email: 'admin@admin.com', password: 'admin' }
];

router.post('/', (req, res) => {
    const { email, password } = req.body;

   
    router.get("/", authenticateToken, (req, res) => {
        res.send("Working from login");
      });
    
    const user = users.find(user => user.email === email);

 

    if (!user || user.password !== password) {
        
        return res.status(400).json({
            error: "DATOS DE SESION INCORRECTOS",
        });
    }
    delete user.password;

    const token = jwt.sign(user, process.env.ACCESS_TOKEN_TOPSECRET);

    
    

   
    

    return res.status(200).json({ msg: "Logged in successfully", token });

});

module.exports = router;

