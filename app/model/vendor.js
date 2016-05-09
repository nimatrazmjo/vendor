/**
 * Model for Vendor Registeration
 *
 */



var mongoose = require('mongoose'),
    strtotime = require('strtotime');

var VendorSchema = mongoose.Schema(
    {
        username : String,
        password : String,
        comp_name : String,
        business_id : String,
        bank_name : String,
        account_number : String,
        expiry_date : Number,
        other : String
    }
);

var VendorModel = mongoose.model('Vendor', VendorSchema);

/** Add function **/
exports.add = function(req, res, next) {

    var rec = records(req);
    VendorModel.create(rec, function(err) {
        if(err) return next(err);
        res.redirect('/');
    });
}

/**
 * table fields based on posted records
 * @param req
 * @returns {{}}
 */
var records = function(req) {
    var record = {};
    record.username = req.param('username');
    record.password = req.param('password');
    record.comp_name = req.param('comp_name');
    record.business_id = req.param('business_id');
    record.bank_name = req.param('bank_name');
    record.account_number = req.param('account_number');
    record.expiry_date = new Date(req.param('expiry_date')).getTime();
    record.other = req.param('other');
    return record;
}
