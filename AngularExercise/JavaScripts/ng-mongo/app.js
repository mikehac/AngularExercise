//var myCtrl = function ($scope) {
//    $scope.items= [{ name: "Robe" }, { name: "Sally" }]
//}

//Tooken from http://stackoverflow.com/questions/17289236/error-argument-is-not-a-function-got-undefined
angular.module('myApp', []).controller('myCtrl', function ($scope) {
    $scope.items = [{ name: "Robe" }, { name: "Sally" }]
});