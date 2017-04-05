myApp.config(['$routeProvider','$locationProvider','appConstant', function ($routeProvider,$locationProvider,appConstant) {
	
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/good', {
		templateUrl: '/'+appConstant.APP_PATH+'/myApp/assets/html/Products.html',
		controller: 'AppController'
	})
	.when('/GGYY', {
		templateUrl: '/SHA_DEMO/myApp/assets/html/Details.html',
		controller: 'AppController'
	})
		.when('/insert', {
			templateUrl: '/SHA_DEMO/myApp/assets/html/test.html',
		})
	.otherwise({
		redirectTo: '/good'
	});
	
}]);