angular.module('starter.controllers', [])

.controller('StepsCtrl', function($scope, $ionicModal) {
  $scope.data = {};

  $scope.openModal = function() {
    $ionicModal.fromTemplateUrl('templates/modal-steps.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  //Start modal on launch
  $scope.openModal();

  $scope.closeModal = function() {
    $scope.modal.remove();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });

  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('ResultsCtrl', function($scope) {

});