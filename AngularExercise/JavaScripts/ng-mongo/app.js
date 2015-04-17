//var myCtrl = function ($scope) {
//    $scope.items= [{ name: "Robe" }, { name: "Sally" }]
//}

//var app = angular.module('myApp', []);
 
//app.controller('myCtrl');


//Tooken from http://stackoverflow.com/questions/17289236/error-argument-is-not-a-function-got-undefined
angular.module('myApp', []).controller('myCtrl', function ($scope) {
    $scope.items = [
        { name: "Idiot IPA", price: "8.99", LastDrank: "2015-04-17" },
        { name: "Inversion IPA", price: "6.99", LastDrank: "2015-04-17" }
    ]

    $scope.pluralize = {
        0: "No beers left",
        1: "Only one beer left",
        other:"{} beers in Fridge"
    }

    $scope.addBeer = function () {
        var newBeer = { name: $scope.name, price: $scope.price,LastDrank:new Date() };
        $scope.items.push(newBeer);
    }

    $scope.removeItem = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
    }
});