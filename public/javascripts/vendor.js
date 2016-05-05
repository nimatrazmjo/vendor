
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
    $routeProvider.when('/edit/:_id', {
        templateUrl : 'vendor/edit' ,
        controller : 'mvEditUrl'
    });
});

angular.module('apps').controller('mvVendorCtrl', function($scope) {
    $scope.myVar ="I am in render";
});

angular.module('apps').controller('mvLogoutCtrl', function($scope) {
    console.log('I am in logout Controller')
   $scope.logout ="Log out page"
});

/*
angular.module('apps').controller('vendorListCtrl', function($scope, $http) {
    console.log('I am in scope');
    $http.get('/vendor/list').then(
        function successCallBack(response) {
            $scope.list=  response.data;
        },
        function errorCallBack(response) {
            alert('Faild 404');
        }
    );
});
*/


