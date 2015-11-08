/**
 * Created by Piotr Górak on 2015-06-29.
 */
var app = angular.module('resto', []);

app.controller('menu-controller', function ($scope, $http) {
    $http.get('js/dishes.json').success(function (data) {
        $scope.splitted = split_json(data);
        $scope.menu = $scope.splitted[0][0];
        $scope.menu2 = $scope.splitted[1][0];
        $scope.limit = 5;
        $scope.limit2 = 5;
        var featured = get_featured(data);
        $scope.featured = featured;
        $scope.ratings = calculate_rating(featured);
        $scope.range = function (n) {
            return new Array(n);
        };
    });

    $scope.incrementLimit = function () {

        $scope.limit += 5;
        $scope.limit2 += 5;
        if ($scope.splitted[1][0].length <= $scope.limit) {
            $("#load-more").remove();

        }
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        add_margin_description();
        $("body").sliderResto();
    });

});
app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
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
    return [
        [split1],
        [split2]
    ];
}

function calculate_rating(featuredItem) {
    var decimal = Math.floor(featuredItem.rating);
    var putHalfStar = featuredItem.rating % 1 > 0.5;
    var numberOfEmptyStars = function () {
        return putHalfStar ? 5 - decimal - putHalfStar : 5 - decimal;
    };
    return [decimal, putHalfStar, numberOfEmptyStars()];
}

function get_featured(data) {
    var featuredDishes = [];
    $.each(data, function (index, val) {
        if (val.featured) {
            val['detailedRating'] = calculate_rating(val);
            featuredDishes.push(val);
        }
    });
    return featuredDishes;
}