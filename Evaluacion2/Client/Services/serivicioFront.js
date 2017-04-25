//creacion de servicio
angular
    .module('myApp')
    .factory('apiservice', apiservice);

//inyeccion
apiservice.$inject = ['$http'];

function apiservice($http) {
    return {
        getAllUsers: function () {
            $http.get("../usuarios/users/")
                .then(function (response) {
                    console.log(response.data);
                });
        },
        getUser: function (user) {
            $http.get("../usuarios/users/"+user)
                .then(function (response) {
                    console.log(response.data);
                });
        },
        deleteUser: function (user) {
            $http.delete("../usuarios/users/" + user)
                .then(function (response) {
                    console.log(response.data);
                });
        },
        updateUser: function (user,nombre,apellido,email,password) {
            data = '{"Id":'+user+',"nombre":"'+nombre+'","apellido":"'+apellido+'","email":"'+email+'","password":"'+password+'"}';
            $http.put("../usuarios/users/" + user)
                .then(function (response) {
                    console.log(response.data);
                });
        },
        createUser: function (user,nombre,apellido,email,password) {
            data = '{"Id":'+user+',"nombre":"'+nombre+'","apellido":"'+apellido+'","email":"'+email+'","password":"'+password+'"}';
            $http.post("../usuarios/users/" + user)
                .then(function (response) {
                    console.log(response.data);
                });
        }
    }
}