angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {

      $scope.listings.push({
        code: $scope.newAdd.code,
        name: $scope.newAdd.name,
        coordinates: {
              latitude: $scope.newAdd.coordinates.latitude,
              longitude: $scope.newAdd.coordinates.longitude,
             },
        address: $scope.newAdd.address,
      })
      $scope.newAdd.code="";
      $scope.newAdd.name="";
      $scope.newAdd.coordinates.latitude=0;
      $scope.newAdd.coordinates.longitude=0;
      $scope.newAdd.address="";
};

    $scope.deleteListing = function(index) {

       $scope.listings.splice(index,1);
};

    $scope.showDetails = function(index) {
       $scope.detailedInfo=index;
};
  }
]);
