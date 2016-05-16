(function() {
  'use strict';

  angular
    .module('dynamicFolderApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
