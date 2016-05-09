/* GET users listing. */

var mongoose = require('mongoose');

var vendor = require('../app/model/vendor');
var VendorModel = mongoose.model('Vendor');
module.exports = function(app) {
    app.post('/add-vendor', vendor.add);
    app.get('/vendor_list', function(req, res, next) {

        VendorModel.find({}).exec(function(err, data) {
            if(err) return next(err);
            if(!data) return next();
            res.send(data);
        });
    });
}
