'use strict';

services
.factory('VendorSearchService', ['$http', function($http) {

    var vendors = { vendors: [] };
    $http.get('js/data/vendors.json').success(function(response) {
      return vendors.vendors = response.data.vendors;
    }).error(function(){
      console.log("error loading the data");
    });

    return vendors;
}]);

