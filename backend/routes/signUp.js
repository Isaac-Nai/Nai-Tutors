const express = require("express")
const router = express.Router();


router.post("/" , (req, res) => {
    console.log(req.body.fname);
    res.json({
        message: "success",
        level: "chad"
    })
})

module.exports = router;