angular.module('directivesModule', [])
    .controller('addMyListController', function ($scope) {
        $scope.showAlert = function () {
            $("#alert").fadeTo(1000, 1).slideUp();
        }
    })
    .directive('addMyList', function() {
        return {
            restrict: 'E',
            template: '<button ng-click="showAlert()" type="button" class="btn btn-default">Agregar a mi lista</button>'
        };
    });
