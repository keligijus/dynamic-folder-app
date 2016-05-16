(function() {
  'use strict';

  var tree = [
      {
        name: 'Tree',
        children: [
          {
            name: 'Dolor',
            children: [
              {
                name: 'Orci',
                children: [
                  {
                    name: 'Quis',
                    children: [
                      {
                        name: 'Last name'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'Sit',
            children: [
              {
                name: 'Amet'
              },
              {
                name: 'Consectetur',
                children: [
                  {
                    name: 'Adipiscing'
                  },
                  {
                    name: 'Elit'
                  }
                ]
              },
              {
                name: 'Vestibulum'
              }
            ]
          },
          {
            name: 'Vitae'
          }
        ]
      }
  ];


  angular
    .module('dynamicFolderApp')
    .value('TREE', tree);
})();