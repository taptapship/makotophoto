angular.
  module('makoto', ['ui.router']).
  config(function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider.
      state('home', {
        url: '/',
        templateUrl: 'views/index.html'
      });

    $urlRouterProvider.otherwise('/');
  });
