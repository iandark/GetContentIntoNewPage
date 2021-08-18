const http = require('https');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    http.get(process.env.URL, (res) => {
        let rawHtml = '';
        res.setEncoding(process.env.ENCODING);
        res.on('data', (chunk) => { rawHtml += chunk; });
        res.on('end', () => {
            try {
                response.send(rawHtml);
            } catch (e) {
                console.error(e.message);
            }
        });
    });
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`🔥 Started on port ${process.env.PORT || 3333}!`);
});
