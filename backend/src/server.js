const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 11451;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, '../../src')));
app.use('/assets', express.static(path.join(__dirname, '../../assets')));

// Data
const groupSizes = {
    2024: 834,
    2025: 737
};

// API Routes
app.post('/api/groupSize', (req, res) => {
    const { year } = req.body;
    
    if (!year) {
        return res.status(400).json({ error: 'Year is required' });
    }

    const size = groupSizes[year];
    
    if (size) {
        res.json({ size });
    } else {
        res.status(404).json({ error: 'Data not found for this year' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
