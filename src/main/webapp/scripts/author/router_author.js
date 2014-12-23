'use strict';

App
    .config(function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/author', {
                    templateUrl: 'views/authors.html',
                    controller: 'AuthorController',
                    resolve:{
                        resolvedAuthor: ['Author', function (Author) {
                            return Author.query().$promise;
                        }],
                        resolvedEeee: ['Eeee', function (Eeee) {
                            return Eeee.query().$promise;
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        });
