merchantApp

    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/products');

        $stateProvider
		.state('products', {
                	url: '/products',
                	views: {
                    		'mainView': {
                        		templateUrl: 'app/views/products.html'
                    		}

                	}
            	})
		.state('categories', {
                	url: '/categories',
                	views: {
                    		'mainView': {
                        		templateUrl: 'app/views/categories.html'
                    		}

                	}
            	})
		.state('brands', {
                	url: '/brands',
                	views: {
                    		'mainView': {
                        		templateUrl: 'app/views/brands.html'
                    		}

                	}
            	})

    })
    .run(function($rootScope, $state, $log, $http) {
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        });
    });