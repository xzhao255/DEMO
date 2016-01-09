/**
 * Created by xzhao on 1/2/16.
 */
angular.module('directives', [])
    .directive('avatar', function($compile){
    var directive = {
        restrict: 'EA',
        templateUrl: function (el, attr) {
            var view = attr.view;

            if (!view || view === 'front') {
                return '/directives/avatar/avatarFrontView.html';
            } else if (view === 'back') {
                return '/directives/avatar/avatarBackView.html';
            } else if (view === 'derm-front') {
                return '/directives/avatar/dermatomeFrontView.html';
            }
        },
        scope: {
            view: '='
        },
        link: linkFunc,
        controller: avatarController,
        controllerAs: 'avatarCtrl',
        bindToController: true // because the scope is isolated
    };

    return directive;

    function linkFunc(scope, el, attr) {

        // Below events are to make the popover stay open
        $('.pop').on('mouseenter', function () {
            $(this).popover('show');
        }).on('mouseleave', function () {
            var _this = this;
            setTimeout(function () {
                if (!$('.popover:hover').length) {
                    $(_this).popover('hide');
                }
            }, 100);
        });

        $('body').on('mouseleave', '.popover', function () {
            $(this).popover('hide');
        });

        // Binding popover to paths
        if (!attr.view || attr.view === 'front') {
            bindPopover('#left-hand', 'right', '#left-hand-pop', scope, $compile);
            bindPopover('#left-arm', 'right', '#left-arm-pop', scope, $compile);
            bindPopover('#left-upper-arm', 'right', '#left-upper-arm-pop', scope, $compile);
            bindPopover('#left-lower-arm', 'right', '#left-lower-arm-pop', scope, $compile);
            bindPopover('#right-abdom', 'top', '#right-abdom-pop', scope, $compile);
            bindPopover('#left-abdom', 'right', '#left-abdom-pop', scope, $compile);
            bindPopover('#left-quad', 'right', '#left-quad-pop', scope, $compile);
        } else {
            bindPopover('#left-hamstring', 'left', '#left-hamstring-pop', scope, $compile);
        }
    };
});

function bindPopover(bindingElement, placement, contentUrl, scope, $compile) {
    $(bindingElement).popover({
        trigger: 'manual',
        placement: placement,
        html: true,
        animation: true,
        content: function () {
        	var html = $(contentUrl).html();
        	return html;
        	//return $compile()(scope);
        },
        container: 'body'
    });
};

//return $compile($("#pop-over-content").html())(scope);

avatarController.$inject = ['$scope'];

function avatarController($scope) {

    $scope.test = function () {
      alert("avatarController scope");
    };

    this.test = function () {
        alert("avatarController ctrl");
    };


};