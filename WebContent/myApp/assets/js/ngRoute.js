myApp.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider
	.when('/GGYY',{
		templateUrl:'WEB-INF/view/maki.html',
		controller:'AppController'
	})
	.when('/insert',{
		templateUrl:'',
		controller:'AppController'
	})
	
}]);