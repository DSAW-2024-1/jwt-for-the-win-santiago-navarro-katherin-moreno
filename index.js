const authenticateToken = require('./authenticateToken');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();

app.use(express.json());
app.use(cookieParser());

const contactsR = require("./routes/Contact");
const formR = require("./routes/Form");
const loginR = require("./routes/Login");
const profileR = require("./routes/Profile");

app.use("/contacts", contactsR);
app.use("/form", formR);
app.use("/login", loginR);
app.use("/profile", profileR);



app.get('/',authenticateToken, (req, res) => {
    res.send("WELCOME ------- NAVARRO & MORENO");
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
