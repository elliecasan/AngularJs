var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "app/partials/AddGenre.html",
            controller: "AddGenreController"
        })
        .when('/ListGenre',
        {
            templateUrl: "/app/partials/ListGenre.html",
            controller: "ListGenreController"
        })
        .when('/UpdateGenre',
        {
            templateUrl: "/app/partials/UpdateGenre.html",
            controller: "UpdateGenreController"
        })
        .otherwise({ redirectTo: '/' });


});

app.controller('AddGenreController', AddGenreController),
app.controller('ListGenreController', ListGenreController),
app.controller('UpdateGenreController', UpdateGenreController)