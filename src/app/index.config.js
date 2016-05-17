(function() {
  'use strict';

  angular
    .module('dynamicFolderApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
