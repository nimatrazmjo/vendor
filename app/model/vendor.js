var mongoose = require('mongoose');


var VendorSchema = mongoose.Schema(
    {
        username : String,
        password : String,
        comp_name : String,
        business_id : String,
        bank_name : String,
        account_number : String,
        expiry_date : Date,
        other : String
    }
);

var VendorModel = mongoose.model('Vendor', VendorSchema);

exports.add = function(req, res, next) {
    VendorModel.create(req.body, function(err) {
        if(err) return next(err);
        res.redirect('/');
    });
}

//exports.list =