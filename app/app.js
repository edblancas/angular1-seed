angular.module('App', [])
    .controller('MainController', function ($scope, $http) {
        var movies,
            restUrl = "http://localhost:8080/movies",
            fileUrl = "data/movies.json";

        function extract(result) {
            return result.data;
        }

        $http.get(fileUrl).then(function(results) { $scope.movies = extract(results) });

        $scope.hello = "Hello World!";
    });

