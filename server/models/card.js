var mongoose = require('mongoose');

module.exports = mongoose.model('Card', {
    user_name: String,
    card_number: String,
    balance: String
});
