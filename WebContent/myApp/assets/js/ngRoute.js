myApp.config(['$routeProvider','$locationProvider','appConstant', function ($routeProvider,$locationProvider,appConstant) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/good', {
		templateUrl: '/'+appConstant.APP_PATH+'/myApp/assets/html/template.html',
	})
	.when('/GGYY', {
		templateUrl: '/SHA_DEMO/myApp/assets/html/maki.html',
		controller: 'UserController',
		 resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
             deps: ['$ocLazyLoad', function($ocLazyLoad) {
                 return $ocLazyLoad.load('/'+appConstant.APP_PATH+'/myApp/assets/js/UserController.js');
               }]
             }
	})
		.when('/insert', {
			templateUrl: '/SHA_DEMO/myApp/assets/html/test.html',
			 resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/'+appConstant.APP_PATH+'/myApp/assets/js/qooController.js');
                  }]
                }
		})
	.otherwise({
		redirectTo: '/good'
	});
	
}]);