# Postwork 06: Auth layer

Agregemos una capa de autenticación a nuestro proyecto de Lives con lo que hemos aprendido en esta sesión

## :dart: Objetivos
* Configurar la función `context` para leer el `jwt` del `header` `authorization`
* Agregar operaciones para el registro y firma de usuarios (signup y signin)
* Proteger las operaciones relacionadas a los `lives`

## Desarrollo
* Define y registra el modelo de datos para `User`
* Agrega la mutación para la operación `signUp` (registro de un usuario)
* Ya teniendo usuarios registrados, expon el query para `signIn`
* Por último, protege el acceso a las operaciones relacionadas a los `lives` para aquellos usuarios que proporcionen un `jwt` válido