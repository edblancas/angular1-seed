angular.module('movies', [])
    .service('moviesService', function ($http) {
        var movies,
            restUrl = "http://localhost:8080/movies",
            fileUrl = "data/movies.json";

        function extract(result) {
            return result.data;
        }

        this.getMovies = function () {
            return $http.get(restUrl).then(extract);
        }
    });
