# Proyecto de Servicio API y cliente para  Alta, Baja y Manipulacion de usuarios
## Objetivos
### Servicio API
1.  Crear un servicio "usuarios" que devuelva todos los usuarios de una tabla "User" con los
campos, id, nombre, apellido, email, password. Para esto deberás crear la base de datos, la
tabla, popular con un script y empaquetar todos los datos necesarios para poder correr en
otra computadora la aplicación y los servicios.
2. Crear los servicios en la api rest para el ABM de usuarios
### Cliente
1. Hacer un ABM de usuarios consumiendo los servicios que se desarollados en el punto 2
y 3 del test anterior.

## Funcionamiento
El repositorio contiene un proyecto en VS2013 que al entrar en debug apertura un servidor con direccion http://localhost:8080/
1. El servicio API funciona bajo filosofia REST por lo que al hacer peticiones mediante la URL puede generar una serie de comandos
- http://localhost:8080/usuarios/ es la direccion base del servicio
- http://localhost:8080/usuarios/users mediante metodo GET genera una petición de toda la base datos
- http://localhost:8080/usuarios/users/{id} mediante metodo GET genera una peticion de informacion de un usuario especifico mediante su id
- http://localhost:8080/usuarios/{id} mediante metodo DELETE genera una peticion de eliminacion de un usuario especifico
- http://localhost:8080/usuarios/user mediante metodo POST con data genera una peticion de creacion de usuario, data debe estar compuesto {Id:{id},nombre:{nombre},apellido:{apellido},email:{email},password:{password}}
- http://localhost:8080/usuarios/user/{id} mediante metodo PUT con data genera una peticion de actualizacion de usuario, data debe estar compuesto {Id:{id},nombre:{nombre},apellido:{apellido},email:{email},password:{password}}
2. Mediante la direccion http://localhost:8080/index.html se puede realizar acceso a el cliente
3. La base datos se encuentra empaquetada en el proyecto en la carpeta 	App_Data/usuarios.mdf