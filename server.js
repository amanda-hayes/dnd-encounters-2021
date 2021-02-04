const app = require("./express_api/app");
const express = require("express")();

// for react router
app.get("*", (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});
