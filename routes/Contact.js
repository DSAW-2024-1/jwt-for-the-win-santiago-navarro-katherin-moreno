const express = require('express');
const router = express.Router();
const authenticateToken = require('../authenticateToken');
router.get("/", authenticateToken, (req, res) => {
    res.send("Working from contacs");
  });

const gente = [
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+1-555-123-4567"
    },
    {
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "+1-555-987-6543"
    },
    {
        "name": "Robert Brown",
        "email": "robert.brown@example.com",
        "phone": "+1-555-456-7890"
    },
    {
        "name": "Emily Davis",
        "email": "emily.davis@example.com",
        "phone": "+1-555-321-0987"
    },
    {
        "name": "Michael Johnson",
        "email": "michael.johnson@example.com",
        "phone": "+1-555-654-3210"
    },
    {
        "name": "Linda Williams",
        "email": "linda.williams@example.com",
        "phone": "+1-555-789-0123"
    },
    {
        "name": "David Jones",
        "email": "david.jones@example.com",
        "phone": "+1-555-234-5678"
    },
    {
        "name": "Susan Wilson",
        "email": "susan.wilson@example.com",
        "phone": "+1-555-890-1234"
    },
    {
        "name": "James Taylor",
        "email": "james.taylor@example.com",
        "phone": "+1-555-567-8901"
    },
    {
        "name": "Patricia Anderson",
        "email": "patricia.anderson@example.com",
        "phone": "+1-555-432-1098"
    }
]


router.get("/", authenticateToken, (req, res) => {
    res.json(gente );
  });



module.exports = router;