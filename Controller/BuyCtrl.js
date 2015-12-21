var Sum = require('../Model/Sum');

var buySomthing = function(req, res) {
    // req.body
    console.log(process.env.develop);
    console.log(req.body);

    // deal with Form
    var a = req.body.a;
    var b = req.body.b;
    var c = req.body.c;
    var sum = a + b + c;

    new Sum({
        number: sum
    }).save(function(error) {
        // == or ===
        // == value, 1 and "1" => true
        // === value + type, 1 and "1" => false
        if (error !== null) {
            console.log(error);
        } else {
            res.json({
                message: sum
            });
        }
    });
}

module.exports = {
    buySomthing : buySomthing
}
