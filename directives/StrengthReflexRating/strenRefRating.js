/**
 * Created by xzhao on 1/6/16.
 */
angular.module('directives')
    .directive('strenRefRating', function () {
        var directive = {
            restrict: 'EA',
            templateUrl: 'directives/StrengthReflexRating/strenRefRating.html',
            scope: {
                title: '='
            },
            link: linkFn,
            controller: ratingController,
            controllerAs: 'rateCtrl',
            bindToController: true
        };
        return directive;


        function linkFn(scope, el, attr) {
            // scope.test = function(index) {
            //    alert(index);
            //}

        }

    });

ratingController.$inject = ['$scope'];

function ratingController($scope) {
    var selectedStrength = '-1';
    var selectedReflex = '-1';
    var activeBtnClass = 'btn-primary';

    this.selectStrength = function (index) {
        if (index === selectedStrength) {
            selectedStrength = '-1';
        } else {
            selectedStrength = index;
            $('body').find('#left-hand').css({"fill": "red", "fill-opacity": "0.3"});
        }
    };

    this.getStrengthClass = function (index) {
        return selectedStrength === index ? activeBtnClass : '';
    };

    this.selectReflex = function (index) {
        if (selectedReflex === index) {
            selectedReflex = '-1';
        } else {
            selectedReflex = index;
        }
    };

    this.getReflexClass = function (index) {
        return selectedReflex === index ? activeBtnClass : '';
    };

};