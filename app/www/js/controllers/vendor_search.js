
controllers
.controller('VendorSearchController', ['$scope', 'VendorSearchService', '$location',
  function($scope, vendorSearchService, $location) {

    $scope.onSearch = function (search) {
      $scope.vendors = vendorSearchService;
    };

    $scope.clickHandler = function (vendor) {
      $location.path('/vendor/'+vendor.id);
    }
}]);

