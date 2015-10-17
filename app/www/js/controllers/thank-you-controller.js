"use strict";

controllers
.controller('ThankYouController', ['$scope', '$ionicHistory', '$location',
  function($scope, $ionicHistory, $location) {
  	$ionicHistory.nextViewOptions({
     disableBack: true
});
}]);
