var Card = require("../models/card");

module.exports.create = function(req, res){
    var card = new Card(req.body);
    card.save(function(err, result){
        res.json(result);
    });
};

// module.exports.list = function(req,res){
//     Card.find({}, function(err, results){
//         res.json(results);
//     })
// }

module.exports.chargeCard = function(req,res){
    var user = req.body.user_name;
    var charge = req.body.charge;

    Card.find({user_name: user}, function (err, user) {
        card = card[0];
        card.balance += charge;

        card.save(function (err) {
            if(err) {
                console.error("ERROR!");
            }
        });
    });
