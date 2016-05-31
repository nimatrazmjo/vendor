/**
 * Model for Vendor Registeration
 *
 */



var mongoose = require('mongoose'),
       validator = require('express-validator');

var VendorSchema = mongoose.Schema(
    {
        username : { type: String, required:[true, 'Username is required']},
        password : { type: String, require:[true, 'Password is required']},
        comp_name : { type: String, require:[true, 'Company name is required']},
        business_id : { type: String, require:[true, 'Business ID is required']},
        bank_name : { type: String, require:[true, 'Bank Name is required']},
        account_number : { type: String, require:[true, 'Account number is required']},
        expiry_date : { type: Number, require:[true, 'Expire date is required']},
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

/** Form validation **/
var validator = function (req) {
    var status = {};

}

exports.getRecords = function(req, res, next) {
    var id = req.param('id');
    VendorModel.findById(id).exec(function(err, data) {
        if(err || !data) {
            return next(err);
        }
       res.render('vendor/edit',{ rec:data});

    });
}