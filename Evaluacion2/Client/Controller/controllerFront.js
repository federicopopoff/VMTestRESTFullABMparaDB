//creacion de controlador
angular
    .module('myApp')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice', '$http', '$resource']

//declaracion de metodos y propiedades
function myCtrl($scope, apiservice, $http, $resource) {

    $scope.nav = 0;

    $http.get('../usuarios/users').
        then(function (response) {
            $scope.baseDatos = response.data;
            console.log($scope.baseDatos);
    });
    
    
    $scope.getUser = function (user) {
        apiservice.getUser(user);
    };
    $scope.deleteUser = function (user) {
        apiservice.deleteUser(user);
    };
    $scope.updateUser = function (user, nombre, apellido, email, password) {
        apiservice.updateUser(user, nombre, apellido, email, password);
    };
    $scope.createUser = function (user, nombre, apellido, email, password) {
        apiservice.createUser(user, nombre, apellido, email, password);
    };
    
}