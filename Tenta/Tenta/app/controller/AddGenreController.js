function AddGenreController($scope,$http,$location) {
    $scope.SaveNewGenre= function() {
        $http.post("/odata/Genres", $scope.NewGenre)
            .success(function() {
                console.log($scope.SaveNewGenre + "was saved!!!");
                $location.path('/ListGenre');
            });
    }
}