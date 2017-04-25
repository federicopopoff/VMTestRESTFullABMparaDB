//creacion de controlador
angular
    .module('myApp')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice']

//declaracion de metodos y propiedades

function myCtrl($scope, apiservice) {
    $scope.getAllUsers = function () {
        apiservice.getAllUsers();
    };
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
    $scope.prueba = function (texto){
        console.log(texto);
    }
}