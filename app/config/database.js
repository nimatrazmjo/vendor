var mongoose = require('mongoose');

module.exports = function() {

    mongoose.connect('mongodb://localhost/vendor');
    var con = mongoose.connection;
    con.on('error', console.error.bind(console,'Does not connected to mongdb'));
    con.once('open', function callback() {
        console.log('Vendor databsae is opened');
    });
}