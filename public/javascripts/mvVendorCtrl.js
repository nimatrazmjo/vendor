angular.module('apps').controller('vendorListCtrl',function($scope, $http){

   $http.get('/vendor_list').then(
       function successCallback(response) {
          $scope.test = response.data;

       },
       function errorCallback(response) {
          alert('Failed '+response);
       }
   );
});

angular.module('apps').controller('addVendorCtrl', function($scope, $http) {

    /*$http.get('/add/vendor').then(
       function successCallBack(response) {
           $scope.test = response.data;
       },
       function errorCallBack(response) {
           alert('Failed '+response);
       }
   )*/
});