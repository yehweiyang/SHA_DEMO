angular.module('myApp').controller('ModalController', 
		 ["$uibModalInstance","$scope","$http","param",  function ($uibModalInstance,$scope,$http,param) {
			 
			    // Do your stuff
//				console.log($scope)
				console.log(param.data)
				if(param.data){
					 $scope.last_name= param.data.last_name;
					 $scope.first_name=param.data.first_name;
					 $scope.id=param.data.id;
					 $scope.email= param.data.email;
				}
				 $scope.update = function(){
					    	$scope.inputVO= {
					    			last_name:$scope.last_name,
					    			first_name: $scope.first_name,
					    			id:$scope.id,
					    			email: $scope.email
					    	};
					    	$http.put('update',$scope.inputVO).then(function(response){
					    		alert("修改成功");
					    	});
					    $uibModalInstance.close();
					  };

			
					  $scope.cancel = function () {
					    $uibModalInstance.dismiss('cancel');
					  };
			  }]);
		