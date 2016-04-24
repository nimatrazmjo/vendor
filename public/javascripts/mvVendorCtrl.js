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