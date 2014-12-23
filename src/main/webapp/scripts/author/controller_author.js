'use strict';

App.controller('AuthorController', function ($scope, resolvedAuthor, Author, resolvedEeee) {

        $scope.authors = resolvedAuthor;
        $scope.eeees = resolvedEeee;

        $scope.create = function () {
            Author.save($scope.author,
                function () {
                    $scope.authors = Author.query();
                    $('#saveAuthorModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.author = Author.get({id: id});
            $('#saveAuthorModal').modal('show');
        };

        $scope.delete = function (id) {
            Author.delete({id: id},
                function () {
                    $scope.authors = Author.query();
                });
        };

        $scope.clear = function () {
            $scope.author = {eeeeee: null, rrrrr: null, id: null};
        };
    });
