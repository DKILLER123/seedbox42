app.controller('usersCtrl', function ($scope, $rootScope, RequestHandler, Upload, Tools) {

	console.log("usersCtrl");

	$scope.view = "list";
	$scope.myFile;
	$scope.newUser = {
		login: "test",
		mail: "test@hotmail.fr",
		password: "okok",
		role: 1,
	}

	$scope.$on("fileSelected", function (event, args) {
        $scope.myFile = args.file;
    });

	RequestHandler.get(api + "users")
		.then(function(result){
			for (var key in result.data){
				if (!("avatar" in result.data[key])){
					result.data[key].avatar = "undefined";
				}
			}
			$scope.users = result.data;
	});

	$scope.changeView = function(view){
		$scope.view = view;
	};

	$scope.addUser = function(){
		var callbackConfirm = function(){
			$scope.newUser.avatar = $scope.myFile;
			var fd = new FormData();
			for (var key in $scope.newUser){
				fd.append(key, $scope.newUser[key]);
			}
			RequestHandler.post(api + "users", fd, false, {transformRequest: angular.identity, headers: {'Content-Type': undefined}})
				.then(function(result){
					result.data = JSON.parse(result.data);
					if (result.data.success){
						$scope.users.push(result.data.data);
					}
				});
		};

		var callbackCancel = function(){};

		Tools.modalConfirm("Confirmation", "Voulez ajouter cet utilisateur ?", callbackConfirm, callbackCancel);
	};

	$scope.deleteUser = function(id){
		var callbackConfirm = function(){
			RequestHandler.delete(api + "users/"+id)
				.then(function(result){
					if (result.data.success){
						$scope.users = result.data.data;
						console.log($scope.users);
					}
				});
		};

		var callbackCancel = function(){};

		Tools.modalConfirm("Confirmation", "Voulez vous supprimer cet utilisateur ?", callbackConfirm, callbackCancel);

	};

	$scope.editUser = function (user){
		$scope.changeView("edit");
		$scope.selectUser = user;
	};

	$scope.updateUser = function(){

		var callbackConfirm = function(){
			RequestHandler.put(api + "users/" + $scope.selectUser._id, $scope.selectUser)
				.then(function(result){
					console.log(result);
				});
		};

		var callbackCancel = function(){};

		Tools.modalConfirm("Confirmation", "Voulez confirmer cette modification ?", callbackConfirm, callbackCancel);
	};

});
