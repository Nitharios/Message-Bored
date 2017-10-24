/* jshint esversion:6 */
const express = require('express');
const PORT = process.env.PORT || 8888;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});