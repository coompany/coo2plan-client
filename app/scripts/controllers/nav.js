'use strict';

angular.module('coo2planClientApp')
  .controller('NavCtrl', function ($scope, $modal) {
    var linkTemplates = {
      default: 'views/nav/default.html',
      logged: 'views/nav/logged.html'
    };

    $scope.containerTmpl = 'views/nav/container.html';
    $scope.navigationLinks = linkTemplates.default;

    $scope.openLogin = function() {
      $modal.open({
        templateUrl: 'views/modals/login.html',
        size: 'sm'
      });
    };
  });
