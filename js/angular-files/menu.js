/**
 * Created by Piotr Górak on 2015-06-29.
 */
var app = angular.module('menu-iterator', []);

app.controller('menu-controller', function ($scope, $http) {
    $http.get('js/dishes.json').success(function (data) {
        $scope.splitted = split_json(data);
        $scope.menu = $scope.splitted[0][0];
        $scope.menu2 = $scope.splitted[1][0];
        $scope.limit = 5;
        $scope.limit2 = 5;
    });
    $scope.incrementLimit = function () {
        $scope.limit += 5;
        $scope.limit2 += 5;

        if ($scope.splitted[1][0].length <= $scope.limit) {
            $("#load-more").remove();
        }
    }
});
function split_json(data) {
    var split1 = [];
    var split2 = [];
    for (var i = 0; i < data.length / 2; i++) {
        split1.push(data[i]);
    }
    for (var j = split1.length; j < data.length; j++) {
        split2.push(data[j]);
    }
    return [[split1], [split2]];

}