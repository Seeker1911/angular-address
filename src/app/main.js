angular.module('app', ['ngRoute', 'ui.bootstrap'])
  .config(($routeProvider) => (
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl: 'app/partials/main.html',
      })
      .when('/addresses', {
        controller: 'AddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/partials/addresses.html',
      })
      .otherwise('/')
  ))

  .controller('MainCtrl', function () {
    const main = this
  })

 .controller('AddressCtrl', function () {
    const address = this
  })

