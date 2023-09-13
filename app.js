const express = require('express');
const dotenv=require('dotenv');
const axios = require('axios');
dotenv.config({path:'./config.env'});
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.get('/',(req,res)=>{
  res.send("working ");
})

// Handle POST request with JSON data from frontend
app.post('/save', async (req, res) => {
  try {
    const jsonData = req.body; // JSON data received from the frontend

    // TODO: Send JSON data to SheetDB using Axios or another HTTP library
    // Example code for sending data to SheetDB:

    const sheetdbUrl = process.env.SHEETURL;

    const response = await axios.post(sheetdbUrl, jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json({ message: 'Data saved to SheetDB successfully', response: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
