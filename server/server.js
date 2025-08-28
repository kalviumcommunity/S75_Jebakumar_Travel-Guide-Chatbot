require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Optional for now

const aiRoutes = require('./routes/aiRoutes');

const app = express();
app.use(express.json());

// Connect DB if available
connectDB();

// Routes
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => res.send('API Running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
