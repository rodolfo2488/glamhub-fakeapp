// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider
  .state('search', {
    url: '/search',
    controller: 'VendorSearchController',
    templateUrl: 'templates/search.html'
  })
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('vendor/:vendorId', {
    url: '/vendor/:vendorId',
    controller: 'vendorController',
    templateUrl: 'templates/vendor.html'
  })
  .state('vendor-services', {
    url: '/vendor-services',
    templateUrl: 'templates/vendor-services.html'
  })
  .state('vendor-reviews', {
    url: '/vendor-reviews',
    controller: 'VendorReviewsController',
    templateUrl: 'templates/vendor-reviews.html'
  })
  .state('vendor-service-booking', {
    url: '/vendor-service-booking',
    controller: 'vendorController',
    templateUrl: 'templates/vendor-service-booking-form.html'
  })
  .state('thank-you', {
    url: '/thank-you',
    controller: 'vendorController',
    templateUrl: 'templates/thank-you.html'
  });

  $urlRouterProvider.otherwise("/");
});
