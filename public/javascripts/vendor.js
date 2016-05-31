
angular.module('apps',['ngResource','ngRoute']);

angular.module('apps').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl : 'vendor/list',
        controller  : 'vendorListCtrl'
    });
    $routeProvider.when('/logout', {
        templateUrl : 'vendor/add',
        controller : 'mvLogoutCtrl'
    });
    $routeProvider.when('/addvendor', {
        templateUrl : 'vendor/add',
        controller : 'mvAddVend'
    });
});

angular.module('apps').controller('mvVendorCtrl', function($scope) {
    $scope.myVar ="I am in render";
});

angular.module('apps').controller('mvLogoutCtrl', function($scope) {

   $scope.logout ="Log out page"
});


angular.module('apps').controller('mvEditUrl', function($scope, $http) {
    $http.get('/vendor_records').then(
        function successCallback(response) {
            console.log(response.data);
            $scope.records = response.data;
        },

        function errorCallback(response) {
            alert('Failed'+response);
        }
    )
});


