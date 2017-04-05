var myApp = angular.module("myApp", ['ui.bootstrap','ngRoute']);

myApp.controller('ModalInstanceCtrl', function ($scope,$uibModalInstance) {
	alert('come here')
	console.log($scope)
	 $scope.ok = function () {
		 alert('ok')
		    $uibModalInstance.close($ctrl.selected.item);
		  };

		  $scope.cancel = function () {
			  alert('cancel')
		    $uibModalInstance.dismiss('cancel');
		  };

	});



myApp.controller('AppController', ['$scope', '$rootScope','$http','$uibModal', function ($scope,$rootScope,$http,$uibModal) {
    $scope.$on('$viewContentLoaded', function () {
    	
    });
   
    $scope.query = function(){
    	$http.get('query',{params :$scope.inputVO}).then(function(response){
    		$scope.total =response.data;
    		
    		console.log($scope.total)
    		alert("查詢成功");
    	});
    };
    
    $scope.insert = function(){
    	$http.post('insert',$scope.inputVO).then(function(response){
    		alert("新增成功");
    	}).error(function(data){
    		alert('新增失敗')
    		console.log(data)
    	});
    }
    $scope.update = function(){
    	$http.put('update',$scope.inputVO).then(function(response){
    		alert("修改成功");
    	});
    };
    
//    $scope.cancel = function(){
//    	$http.delete('cancel',{params :$scope.inputVO}).then(function(response){
//    		alert("刪除成功");
//    	});
//    };
    
    $scope.hello = function(){
    	alert('5566no1');
    	$http.get('jump').then(function(response){
    		alert("跳去新頁面");
    	});
    };
    
    var $ctrl = this;
    $scope.open = function (size, parentSelector) {
        var modalInstance = $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$scope',
          size: size
        });

        modalInstance.result.then(function () {
        	alert(5566);
        }, function () {
        });
      };

    

    
}]);






