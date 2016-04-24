/* GET home page. */
module.exports = function(app) {
  app.get('*', function (req, res, next) {
    res.render('layout/index', {title: 'Vendor Registeration'});
  });

}
