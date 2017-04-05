angular.module('myApp').controller('UserController', ['$scope', '$rootScope','$http','$uibModal','$ocLazyLoad', function ($scope,$rootScope,$http,$uibModal,$ocLazyLoad) {
    $scope.$on('$viewContentLoaded', function () {
    	
    });
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
    	$http.get('jump').then(function(response){
    		alert("跳去新頁面");
    	});
    };
    
    $scope.open = function (data) {
    	console.log(data)
        var modalInstance = $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: '/SHA_DEMO/myApp/assets/html/Details.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
              param: function () {
                  return {'data':data };
              }
          }
        });

        modalInstance.result.then(function () {
        	alert(5566);
        }, function () {
        });
      };

    

    
}]);