//function UpdateGenreController($scope, $http, $routeParams, $location) {
//    var id = $routeParams.genreId;

//    $http.get("/odata/Genres('" + id + "')")
//    .success(function (data, status) {
//        $scope.genre = data;
//    });

//    $scope.updateGenre = function () {
//        $http({
//            url: "/odata/Genres('" + id + "')",
//            method: "put",
//            data: $scope.genre
//        }).success(function (data, status) {
//            $location.path('/ListGenre');
//        });
//    }
//}
function UpdateGenreController($scope, $http, $routeParams, $location) {
    var id = $routeParams.genreId;

    $http.get("/odata/Genres('" + id + "')")

    .success(function (data, status) {
        $scope.genre = data;
    });
    $scope.updateGenre = function () {
        $http({
            url: "/odata/Genres('" + id + "')",
            method: "put",
            data: $scope.genre
        }).success(function (data, status) {
            $location.path('/ListGenre');
        });
    }
}