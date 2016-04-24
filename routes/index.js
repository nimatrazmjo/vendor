/* GET home page.
 *
  *     @author : Nimatullah Razmjo < nimatullah.razmjo@gmail.com>
  *     @date : April 22, 2016
  *     @version : 1.0.0
  *
  * */
module.exports = function(app) {
  app.get('*', function (req, res, next) {
    res.render('layout/index', {title: 'Vendor Registeration'});
  });

}
