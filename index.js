const express = require('express');
const router = require('./router');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
// routes
app.use('/',router);

// start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});