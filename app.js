

(function() {
    var app = angular.module('ShoppingList', []);

    app.controller('ShoppingListCtrl', ctrl);

    function ctrl($scope) {
        $scope.newProduct;
        $scope.items = [
        ];



        $scope.licz = function(){
            console.log($scope.items);
            $scope.total = $scope.items.reduce(function(prevItem,currItem){
                return prevItem + currItem.price;
            },0);

        };



        $scope.removeItem = function(product){
            return $scope.items.forEach(function(item,index){
                    if(item === product)
                $scope.items.splice(index,1)
            })

        };

        $scope.addToList = function() {
            $scope.newProduct.isBought = true;
            var product = angular.copy($scope.newProduct);
            $scope.items.push(product);
        }
    }
})();