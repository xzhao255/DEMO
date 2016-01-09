angular.module("neuroscience", ["chart.js"]).controller("neuroscienceController", nsCtrl);

nsCtrl.$inject = ["$scope"];

function nsCtrl($scope) {
    handleGraph(this, $scope);

    var allPublicStuff = {
        data: getGraphData(),
        strengthBtn: getStrengthBtn(),
        reflexBtn: getReflexBtn()
    };

    return allPublicStuff;
};


function getReflexBtn() {
    return ['1', '2', '3', '4'];
}

function getStrengthBtn() {
    return ['0', '1', '2', '3-', '3', '3+', '4-', '4', '4+', '5-', '5'];
}

function getGraphData() {
    return [
        {
            id: 'line0',
            labels: ["a", "", "", "b"],
            values: [[5, 4.5, 3, 4],],
            series: ['Strength'],
            title: 'Left'
        },

        {
            id: 'line1',
            labels: ["a", "", "", "b"],
            values: [[5, 4.5, 3, 4],],
            series: ['Strength'],
            title: 'Right'
        },

        {
            id: 'line2',
            labels: ["a", "", "", "b"],
            values: [[3.5, 2.5, 3.5, 4.5],],
            series: ['Reflex'],
            title: 'Left'
        },

        {
            id: 'line3',
            labels: ["a", "", "", "b"],
            values: [[2, 3.5, 3.5, 4.5]],
            series: ['Reflex'],
            title: 'Right'
        },

        {
            id: 'line4',
            labels: ["a", "", "", "b"],
            values: [[5, 4.5, 3, 4],],
            series: ['Strength'],
            title: 'Left'
        },

        {
            id: 'line5',
            labels: ["a", "", "", "b"],
            values: [[5, 4.5, 3, 4],],
            series: ['Strength'],
            title: 'Right'
        },
    ];

};


function handleGraph(ctrl, $scope) {
    initGlobalOptions(ctrl);

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $scope.colors = ['#97BBCD'];

};

function initGlobalOptions(ctrl) {
    ctrl.options = {
        scaleShowLabels: true,
        datasetFill: false,
        // Boolean - If we should show the scale at all
        showScale: true,

        // Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 5,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 1,
        // Number - The scale starting value
        scaleStartValue: 0
    };
};