var myApp = angular.module("myApp", []);



myApp.controller('AppController', ['$scope', '$rootScope','$http', function ($scope,$rootScope,$http) {
    $scope.$on('$viewContentLoaded', function () {
    	
    });
   
    $scope.query = function(){
    	$http.get('query',{params :$scope.inputVO}).success(function(response){
    		$scope.total =response;
    		
    		console.log(response)
    		alert("查詢成功");
    	});
    };
    
    $scope.insert = function(){
    	$http.post('insert',$scope.inputVO).success(function(response){
    		alert("新增成功");
    	}).error(function(data){
    		alert('新增失敗')
    		console.log(data)
    	});
    }
    $scope.update = function(){
    	$http.put('update',$scope.inputVO).success(function(response){
    		alert("修改成功");
    	});
    };
    
//    $scope.cancel = function(){
//    	$http.delete('cancel',{params :$scope.inputVO}).success(function(response){
//    		alert("刪除成功");
//    	});
//    };
    
    $scope.hello = function(){
    	alert('5566no1');
    	$http.get('jump').success(function(response){
    		alert("跳去新頁面");
    	});
    };
    
    
    $('#exampleModal').on('show.bs.modal', function (event) {
    	alert(8888888)
    	console.log(6666666666)
    	  var button = $(event.relatedTarget) // Button that triggered the modal
    	  var recipient = button.data('whatever') // Extract info from data-* attributes
    	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    	  var modal = $(this)
    	  modal.find('.modal-title').text('New message to ' + recipient)
    	  modal.find('.modal-body input').val(recipient)
    	  $('#myModal').modal('show')
    	})
    
}]);






