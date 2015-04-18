angular.module('myApp', []).controller('ListCtrl', function ($scope, $http) {
    var result = $http.get("/data/Handler.ashx?rt=GETDBLIST");
    result.success(function (data) {
        $scope.items = data;
    });
});