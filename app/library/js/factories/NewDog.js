app.factory('NewDog', ['$firebaseArray', function($firebaseArray){
	//This will create an id for the new dog
	var dogID = Math.round(Math.random() * 100000);
	var ref = new Firebase("https://springdogs.firebaseio.com/dogs");

	//Return the synchronized array of the new dog
	return $firebaseArray(ref);
}]);