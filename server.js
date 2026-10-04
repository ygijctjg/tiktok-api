const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: true,
        name: 'TARS TikTok API',
        version: '1.0.0',
        endpoints: {
            search: '/search?q=QUERY'
        }
    });
});

app.get('/search', async (req, res) => {
    const query = String(req.query.q || '').trim();

    if (!query) {
        return res.status(400).json({
            status: false,
            error: 'Missing query'
        });
    }

    console.log(`[SEARCH] ${query}`);

    return res.json({
        status: true,
        query,
        results: []
    });
});

app.use((req, res) => {
    res.status(404).json({
        status: false,
        error: 'Endpoint not found'
    });
});

app.listen(PORT, '127.0.0.1', () => {
    console.log('');
    console.log('================================');
    console.log('       TARS TIKTOK API');
    console.log('================================');
    console.log(`Server: http://127.0.0.1:${PORT}`);
    console.log('Search: /search?q=QUERY');
    console.log('================================');
    console.log('');
});
