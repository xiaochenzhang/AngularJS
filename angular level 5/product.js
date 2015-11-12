(function() {
  
  // Level-5
  var app = angular.module('store-directives', []);  
    
  // Level-4
  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'pages/product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(imageNumber){
           this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  // Level-4
  app.directive('productReview', function() {
    return {
      restrict: 'E',
      templateUrl: "pages/product-review.html"
    };
  });
  
  // Level-4
  app.directive('productSpecs', function() {
    return {
      restrict: 'A',
      templateUrl: 'pages/product-specs.html'
    };
  });
    
  // Level-4
  app.directive('productTabs', function(){
    return {
       restrict: 'E',
       templateUrl: 'pages/product-tabs.html',
       controller:function(){
           this.tab = 1;
           this.setTab = function(setTab) {
               this.tab = setTab;
           };
           this.isSet = function(checkTab){
               return this.tab === checkTab;
           };
       },
       controllerAs: 'tab'
     };
  });

  // Level-4
  app.directive('productPrice', function() {
    return {
      restrict: 'E',
      templateUrl: "pages/product-price.html"
    };
  });
    
  
})();