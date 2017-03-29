(function() {
    merchantApp

    .controller('MerchantController',MerchantController);

    MerchantController.$inject = ['$scope','$rootScope','$state','$http'];

    function MerchantController($scope,$rootScope,$state,$http) {
        $scope.purchase = purchase;
        $scope.viewDetails = viewDetails;
        $scope.cloneProduct = cloneProduct;
        
        $scope.recentPurchases = [];
        var count = 0;
        
        $http.get('app/data/products.json').then(function(response) {
            $scope.products = response.data.products;
        });
        
        $http.get('app/data/categories.json').then(function(response) {
            $scope.categories = response.data.categories;
        });
        
        $http.get('app/data/brands.json').then(function(response) {
            $scope.brands = response.data.brands;
        });
        
        function purchase(product) {
            count++;
            var purchaseId = "USERPUR00" + count;
            
            if($scope.recentPurchases.length >= 5) {
                $scope.recentPurchases.shift();
            }
            
            product.purchaseId = purchaseId;
            product.index = count;
            
            $scope.recentPurchases.push(cloneProduct(product));
        }
        
        function viewDetails(product) {
            $scope.purchaseDetails = {};
            
            $scope.purchaseDetails.purchaseId = product.purchaseId;
            $scope.purchaseDetails.name = product.name;
            $scope.purchaseDetails.quantity = 1;
            $scope.purchaseDetails.buyerName = "Saurabh";
            $scope.purchaseDetails.price = product.price;
            
            angular.element('#details-modal').modal('show');
        }
        
        function cloneProduct(product) {
            var clone = {};
            
            for( var key in product ){
                if(product.hasOwnProperty(key))
                    clone[key] = product[key];
            }
            
            return clone;
        }
    }
})();