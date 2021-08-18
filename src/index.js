const http = require('http');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`🔥 Back-end started on port ${process.env.PORT || 3333}!`);
});
