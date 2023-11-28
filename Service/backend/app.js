require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const imageGenerationRoute = require('./routes/imageGeneration');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.urlencoded({ extended: true }));

app.use('/generate-image', imageGenerationRoute);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
