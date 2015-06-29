/**
 * Created by Piotr Górak on 2015-06-29.
 */
var app = angular.module('menu-iterator', []);
app.controller('menu-controller', function($scope, $http) {
    $http.get('js/dishes.json').success (function(data){
        $scope.menu = data;
    });
});