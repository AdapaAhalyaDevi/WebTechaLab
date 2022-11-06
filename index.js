var app1 = angular.module('form', []);
app1.controller('validateCtrl', function($scope) {
    $scope.reg = 'URK20CS3031';
    $scope.email = 'renuka@gmail.com';
    $scope.name = 'Renuka';
});

var app2 = angular.module("myapp", ["ngRoute"]);
app2.controller("myctrl", ($scope) => {


});

app2.config(function($routeProvider) {
    $routeProvider.when('/URK20CS3031', {
        templateUrl: './student1.html'
    }).when('/URK20CS1161', {
        templateUrl: './student2.html'
    }).when('/URK20CS1142', {
        templateUrl: './student3.html'
    }).otherwise({ redirectTo: '/' })
});