# Postwork 08: Conexión con un cliente de interfaz gráfica

Para comprender cómo funciona nuestra API en un sistema, vamos a desarrollar una aplicación cliente con react y conectar las operaciones que tenemos disponibles. Esto nos permitirá entender mejor el desarrollo de un sistema e2e.

## :dart: Objetivos
* Desarrollar una aplicación de interfaz gráfica con react.
* Implementar la integración de Apollo Client.
* Consumir las operaciones que hemos expuesto en nuestra API.

## Desarrollo
* Inicializa una aplicación react con vite
* Configura Apollo Client apuntando a tu API GraphQL
* Maqueta formularios para signin y signup
* Maqueta un card para los lives
* Conecta la mutación signin para ganar sesión cambiando las opciones del menú al hacerlo
* Conecta la mutación signup para registrar nuevos usuarios
* Conecta el query para obtener todos los lives haciendo que solo esté disponible para usuarios que envían su token