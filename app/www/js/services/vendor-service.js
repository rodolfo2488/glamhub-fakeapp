'use strict';

services
    .service('vendorService', function vendorService($q, $http) {
        
        this.getVendorProfile = function( vendorId ) {
        	var deferred = $q.defer();
        	var result = null;

        	$http.get('js/data/vendors.json')
        		.success( function(data) {
        			
        			var vendors = data.data.vendors;
        			for ( var i=0; i < vendors.length; i++ ) {
        				var vendor = vendors[ i ];
        				if ( vendor.id == vendorId ) {
        					result = vendor;
        					deferred.resolve(result);
        					break;
        				}
        			}
        		})
        		.error(function(data) {
        			console.log("on error");
        			deferred.reject(data);
        		});


        	return deferred.promise;
        }
    });
