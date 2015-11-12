(function () {
  var app = angular.module('gameStore', ['store-directives']);

  // Level-5
  app.controller('StoreController', function ($scope, $http) {

    // Level-5  
    var store = this;
    store.products = [];

    $scope.addToCart = function (value) {
      if (value) {
        alert('This game is sold out!');
      } else {
        alert('One item added to your cart!');
      }
    };
      
    // Level-5
    $http.get('products.json').success(function(data){
      store.products = data;
    });
    
    // Level-5
//    var newgame = [{"name" : "Mario (newlly added game)",
//                "price" : 41.00}];
//      $http.post('products.json', this.newgame)
//        .success(function(data, status){
//           alert('One new game is inserted!');
//        })
//        .error(function(data){
//        alert('Wrong insertion!');
//    }
//    );    
      
      
  });

  app.controller('ReviewController', function () {
    this.rev = {};
    this.addReview = function (product) {
      this.rev.createdOn = Date.now();
      product.reviews.push(this.rev);
      this.rev = {};
    };
  });
      
})();