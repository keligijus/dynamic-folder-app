(function() {
  'use strict';

  /** @ngInject */
  function MainController(TREE, $log) {
    var vm = this;

    vm.activeNode = 0;
    vm.tree = TREE;
    vm.addChildNode = addChildNode;

    vm.add = function() {
      $log.info('add');
    }

    function addChildNode(node) {
      var newNode = {
        name: node.newNode
      };

      // Clear input
      node.newNode = '';

      // Hide form
      node.showAddChildForm = false;

      // Expand node to display new item
      node.expand = node.expand || true;

      // push to children array if available,
      // or create a single item array
      return node.children ?
              node.children.push(newNode) :
              node.children = [ newNode ];
    }

  }

  angular
    .module('dynamicFolderApp')
    .controller('MainController', MainController);
})();
