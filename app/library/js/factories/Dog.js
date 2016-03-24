app.factory('Dog', ['$firebaseArray', function($firebaseArray){
	var ref = new Firebase("https://springdogs.firebaseio.com/dogs");

	//Return the synchronized array of the new dog
	return $firebaseArray(ref);
}]);