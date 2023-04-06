const express = require('express');
const router = express.Router();

// middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// routes
router.get('/', (req, res) => {
  res.render("index");
});

router.post('/', (req,res) => {
    var data = req.body['myName'];
    var msg = `Hello ${data}, Welcome to this site!`;
    
    res.render("index", { message: msg })
})

router.post('/submitForm',(req,res) => {
    var data = req.body['myName'];

    res
})

// export router
module.exports = router;