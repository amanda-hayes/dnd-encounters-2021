const express = require('express');
const app = require('./express_api/app');
app.use(express.static('build'))

// for react router
app.get('*', (req, res)=> {
    res.sendFile(path.resolve(`${__dirname}/build/index.html`));
  });