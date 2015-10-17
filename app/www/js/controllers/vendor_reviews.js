"use strict";

controllers
.controller('VendorReviewsController', ['$scope', 'VendorReviewsService', '$location',
  function($scope, VendorReviewsService, $location) {

    $scope.reviews = VendorReviewsService;
}]);
