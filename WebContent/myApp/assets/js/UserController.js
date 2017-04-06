angular.module('myApp').controller('UserController', ['$scope', '$rootScope','$http','$uibModal','$ocLazyLoad','appConstant',
                                                      function ($scope,$rootScope,$http,$uibModal,$ocLazyLoad,appConstant) {
    $scope.$on('$viewContentLoaded', function () {
    	
    });
    console.log(0)
    $scope.query = function(){
    	alert('XXX')
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

    
	  
    $scope.drop = function(data){
    	$http.delete('cancel',{params :data}).then(function(response){
    		alert("刪除成功");
    	});
    };
    
    $scope.nope = function(){
    	$scope.inputVO ={};
    }
    
    $scope.open = function (data) {
        var modalInstance = $uibModal.open({
        	animation: $scope.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: '/SHA_DEMO/myApp/assets/html/Details.html',
          controller: 'ModalController',
          size: 'lg',
          resolve: {
        	  //defer:$ocLazyLoad.load('/'+appConstant.APP_PATH+'/myApp/assets/js/ModalController.js'),
              param: function () {
                  return {'data':data };
              }
          },
          scope :$scope.param
        });

        modalInstance.result.then(function () {
        	 $scope.query();
        });
        return modalInstance;
      };

    

    
}]);