angular.module('directivesModule', [])
    .directive('addMyList', function() {
        return {
            restrict: 'E',
            template: '<button type="button" class="btn btn-default">Agregar a mi lista</button>'
        };
    });
