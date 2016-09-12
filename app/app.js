angular.module('App', ['movies'])
    .controller('MainController', function ($scope, moviesService) {
        moviesService.getMovies().then(function (results) {
            $scope.movies = results;
        });
    });

