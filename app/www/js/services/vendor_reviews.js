'use strict';

services
.factory('VendorReviewsService', ['$http', function($http) {

    var vendor = { reviews: [] };
    $http.get('js/data/reviews.json').success(function(response) {
      return vendor.reviews = response.data.reviews;
    }).error(function(){
      console.log("error loading the data");
    });

    return vendor;
}]);

