angular.
module('moviesList', ['movies', 'directivesModule']).
component('moviesList', {
    templateUrl: 'app/movies-list.template.html',
    controller: function MoviesListController($scope, moviesService) {
            moviesService.getMovies().then(function (results) {
                $scope.movies = results;
            });
        }
});

