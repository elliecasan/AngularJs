function ListGenreController($scope, $http,$route) {
    $http.get("/odata/Genres")
    .success(function (data, status) {
        console.log(data);
        $scope.genres = data.value;
    });

    $scope.deleteGenre= function(g) {
        $http.delete("odata/Genres('" + g + "')")
            .success(function() {
                console.log("Yay!");
                $route.reload();
            });
    }
}