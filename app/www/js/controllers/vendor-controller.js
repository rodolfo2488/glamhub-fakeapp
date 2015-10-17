'use strict';

controllers
.controller('vendorController', [
	'$scope', 
	'$state', 
	'$stateParams', 
	'$ionicLoading', 
	'$compile', 
	'vendorService',
	'VendorReviewsService',
	'ScopeFactory',
	function($scope, $state, $stateParams, $ionicLoading, $compile, vendorService, VendorReviewsService, ScopeFactory ) {		
		$scope.form = ScopeFactory;
		$scope.reviews = VendorReviewsService;

		if ( $state.current.templateUrl == "templates/vendor.html") {
			var vendorId = $stateParams.vendorId;
			var vendorPromiseResult = vendorService.getVendorProfile( vendorId );
			vendorPromiseResult.then( function( vendor ) {
				ScopeFactory.vendor = vendor;
				$scope.vendor = vendor;
				mapLocation( vendor );
			});
		} else {
			$scope.vendor = ScopeFactory.vendor;
		}

		var mapLocation = function( vendor ) {
			var latLong = vendor.latLong.split(",");
			var myLatlng = new google.maps.LatLng(latLong[0], latLong[1]);

			var mapOptions = {
				center: myLatlng,
				zoom: 16,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById("map"),
				mapOptions);

			var contentString = "<div>" + vendor.address + "</div>";
			var compiled = $compile(contentString)($scope);

			var infowindow = new google.maps.InfoWindow({
				content: compiled[0]
			});

			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: ''
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});

			$scope.map = map;
		};
	}]);
