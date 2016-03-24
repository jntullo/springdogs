app.controller('homeController',['$scope', 'Dog' ,function($scope, $Dog){
	$scope.dogs = $Dog;
	$scope.body_class = "home";
}]);