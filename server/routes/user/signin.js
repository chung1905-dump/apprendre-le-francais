var express = require('express');
var User = require('../../model/user');
var router = express.Router();

router.post('/', function (req, res, next) {
    const body = req.body;
    const username = body.username
    const password = body.password
    const errors = {}
    try {
        // validateData(body);
        User.findOne({ username })
            .then(user => {
                if (!user) {
                    errors.message = "Username not found";
                    res.status(404).send({
                        message: errors.message
                    });
                }else if (password !== user.password) {
                    errors.message = "Password incorrect";
                    res.status(400).send({
                        message: errors.message
                    });
                } else {
                    res.json({
                        success: true
                    })
                }
            })

    } catch (e) {
        res.send({
            status: false,
            message: e.message
        });
    }
});

module.exports = router;
