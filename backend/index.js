const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

app.get('/api/greet', (req, res) => {
  const { name } = req.query;
  
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  
  return res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});