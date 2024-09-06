
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
