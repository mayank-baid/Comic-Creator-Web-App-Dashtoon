const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config');

const headers = {
    "Accept": "image/png",
    "Authorization": `Bearer ${config.api_key}`,
    "Content-Type": "application/json"
};

router.post('/', async (req, res) => {
    try {
        const payload = { inputs: req.body.text };
        const response = await axios.post(config.api_url, payload, { 
            headers: headers,
            responseType: 'arraybuffer'
        });

        const image = Buffer.from(response.data, 'binary').toString('base64');
        res.send(image);
    } catch (error) {
        console.error("Error generating image: ", error);
        res.status(500).send("Error generating image");
    }
});

module.exports = router;
