var vendor = require('../model/vendor');

exports.addCtrl = function() {

    var rec = vendor.add;
    if(rec == true){
        res.redirect('/')
    }
}
