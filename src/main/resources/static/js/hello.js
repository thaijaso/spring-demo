angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8090/get-greeting-json').
        then(function(response) {
            $scope.greeting = response.data;
        });
});