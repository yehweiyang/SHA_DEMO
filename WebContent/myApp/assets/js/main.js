var myApp = angular.module("myApp", ['ui.bootstrap','ngRoute','oc.lazyLoad']);

myApp.controller('ModalInstanceCtrl', function ($scope,$uibModalInstance,param) {
	console.log('----------')
	console.log(param.data)
	if(param.data){
		 $scope.last_name= param.data.last_name;
		 $scope.first_name=param.data.first_name;
		 $scope.id=param.data.id;
		 $scope.email= param.data.email;
	}
	 $scope.ok = function () {
		    $uibModalInstance.close($ctrl.selected.item);
		  };

		  $scope.cancel = function () {
			  alert('cancel')
		    $uibModalInstance.dismiss('cancel');
		  };

	});


