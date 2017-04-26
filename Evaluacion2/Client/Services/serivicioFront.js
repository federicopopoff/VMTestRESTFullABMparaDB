
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
                    respuesta = "Has consultado por el usuario con ID: " + response.data.Id + " con Nombre: " + response.data.nombre + ", con apellido: " + response.data.apellido + ", email: " + response.data.email+", password: "+response.data.password ;
                    window.alert(respuesta);
                },function(response)
                {
                    window.alert("Usuario no encontrado");
                }
                );
        },
        deleteUser: function (user) {
            $http.delete("../usuarios/users/" + user)
                .then(function (response) {
                    console.log("Eliminacion de usuario exitosa");
                });
        },
        updateUser: function (user,nombre,apellido,email,password) {
            data = '{"Id":'+user+',"nombre":"'+nombre+'","apellido":"'+apellido+'","email":"'+email+'","password":"'+password+'"}';
            $http.put("../usuarios/users/" + user,data)
                .then(function (response) {
                    console.log("Actualizacion de usuario exitosa");
                });
        },
        createUser: function (user,nombre,apellido,email,password) {
            data = '{"Id":'+user+',"nombre":"'+nombre+'","apellido":"'+apellido+'","email":"'+email+'","password":"'+password+'"}';
            $http.post("../usuarios/users/",data)
                .then(function (response) {
                    console.log("Creacion de usuario exitosa");
                });
        }
    }
}