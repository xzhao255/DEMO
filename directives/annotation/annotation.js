angular
    .module("annotation", ["ui.bootstrap"])
    .directive('plainAnnotation', plainAnnotation);

function plainAnnotation() {

    var directive = {
        restrict: "EA",
        templateUrl: "components/directives/annotation/plainAnnotation.html",
        scope: {
            imgUrl: "="
        },
        link: linkFunc,
        controller: plainAnnotationController,
        controllerAs: "plainCtrl",
        bindToController: true // because the scope is isolated
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
        $(document).ready(function () {
            // Event delegation here is a MUST!
            $(el).on("mouseenter", ".pop", function () {
                $(".pop").popover({
                    html: true,
                    animation: true,
                    content: function () {
                        return $('#popoverExampleTwoHiddenContent').html();
                    },
                    title: function () {
                        return $('#popoverExampleTwoHiddenTitle').html();
                    },

                }).on("mouseenter", function () {
                    //console.log("mouseenter");
                    var _this = this;
                    $(this).popover("show");
                    $(".popover").on("mouseleave", function () {
                        $(_this).popover('hide');
                    });
                }).on("mouseleave", function () {
                    //console.log("mouseleave");
                    var _this = this;
                    setTimeout(function () {
                        if (!$(".popover:hover").length) {
                            $(_this).popover("hide");
                        }
                    }, 50);
                });
            });
        });
    }
}

plainAnnotationController.$inject = ["$scope"];

function plainAnnotationController($scope) {

    //TODO data should be get from the service
    this.annotations = [
        {
            "coord": "{'left': '48.648649%', 'top': '5.1724138%'}",
            "title": "Head",
            "class": "['head', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '48.648649%', 'top': '80px'}",
            "title": "Neck",
            "class": "['neck', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '48.648649%', 'top': '250px'}",
            "title": "Torso",
            "class": "['torso', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '30.630631%', 'top': '55.172414%'}",
            "title": "Right hand",
            "class": "['right-hand', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '200px', 'top': '220px'}",
            "title": "Right arm",
            "class": "['right-arm', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '375px', 'top': '320px'}",
            "title": "Left hand",
            "class": "['left-hand', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '345px', 'top': '220px'}",
            "title": "Left arm",
            "class": "['left-arm', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '240px', 'top': '450px'}",
            "title": "Right leg",
            "class": "['right-leg', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '230px', 'top': '560px'}",
            "title": "Right foot",
            "class": "['right-foot', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '55.85%', 'top': '450px'}",
            "title": "Left leg",
            "class": "['left-leg', 'circle-md', 'bkg-green']",
        },
        {
            "coord": "{'left': '325px', 'top': '560px'}",
            "title": "Left foot",
            "class": "['left-foot', 'circle-md', 'bkg-green']",
        },
    ];
}