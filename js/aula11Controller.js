angular.module("app", ['ngRoute'])

    .controller('Aula11Controller', function ($scope, $route, $routeParams, $location){

        $scope.$route = $route;
        $scope.$routeParams = $routeParams;
        $scope.$location = $location;


    })


    .controller('InicialController', function($scope){
        console.log('Entrou na pagina inicial');

    })

    .controller('Pagina1Controller', function($scope){
        console.log('Entrou na pagina 1');

    })

    .controller('Pagina2Controller', function($scope, $routeParams){
        $scope.parametros = $routeParams;

        console.log('Entrou na pagina 2');

        console.log('Id do Produto'+$scope.parametros.idproduto);

    })


    .config(function($routeProvider, $locationProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'aula11_inicial.html',
                controller: 'InicialController'
            })
            .when('/Pagina1', {
                templateUrl: 'aula11_pagina1.html',
                controller: 'Pagina1Controller'
            })

            .when('/Pagina2/:idproduto', {
                templateUrl: 'aula11_pagina2.html',
                controller: 'Pagina2Controller'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

    });