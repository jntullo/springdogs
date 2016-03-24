app.controller('newDogController',['$scope','NewDog', 'Upload', function($scope, $NewDog, Upload){
	$scope.newdog = $NewDog;
	$scope.dog = {};
	$scope.body_class = "new-dog";

	$scope.submitdog = function(data){
		
		$scope.newdog.$add({
			name: data.name,
			type: data.type,
			owner: data.owner
		}).then(function(ref){
			$scope.dog.name = data.name;
			$scope.success = true;
		});
	}

	$scope.upload = function (file) {
        Upload.upload({
            url: '/image-upload.php',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
}]);