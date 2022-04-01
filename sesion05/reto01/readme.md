# Reto 01: Manipulación de datos en BD

## Objetivo 🎯

* Ejecutar un query con sequelize
* Insertar datos con sequelize

## Desarrollo 📝

### Manipulación de datos con sequelize
* Tomando como base el proyecto del [ejemplo 01](../ejemplo01/) y la documentación de [Sequelize](https://sequelize.org/v6/manual/model-querying-basics.html):
	* Consulta la tabla `books` obteniendo todos los libros
	* Inserta un libro
	* Consulta de nuevo y debes obtener el libro insertado

### Inspección visual de datos
* Instala la extensión`SQLite` de `alexcvzz` para explorar BDs `SQLite`
* Abre la BD con la extensión mediante el comando `Ctrl+Shift+P | Cmd+Shift+P` -> `SQLite: Open Database`
	* Alternativamente puedes buscar en el menú `View` -> `Command Palette` -> `SQLite: Open Database`
* Abre el menú contextual sobre la BD y da click sobre `Show Table [sqlite_master]`
* Abre el menú contextual sobre la tabla `book` y da click sobre `Show Table`
* Termina la sesión y libera la conexión abriendo el menú contextual y dando click sobre la opción `Close Database`

<details>
	<summary>Solucion 🔖</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` está el código
* En la carpeta `client` las llamadas que pueden invocarse con la extensión `REST Client`
* En el archivo `package.json` se agregó el script de arranque

</details>