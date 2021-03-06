# Reto 01: Manipulaci贸n de datos en BD

## Objetivo 馃幆

* Ejecutar un query con sequelize
* Insertar datos con sequelize

## Desarrollo 馃摑

### Manipulaci贸n de datos con sequelize
* Tomando como base el proyecto del [ejemplo 01](../ejemplo01/) y la documentaci贸n de [Sequelize](https://sequelize.org/v6/manual/model-querying-basics.html):
	* Consulta la tabla `books` obteniendo todos los libros
	* Inserta un libro
	* Consulta de nuevo y debes obtener el libro insertado

### Inspecci贸n visual de datos
* Instala la extensi贸n`SQLite` de `alexcvzz` para explorar BDs `SQLite`
* Abre la BD con la extensi贸n mediante el comando `Ctrl+Shift+P | Cmd+Shift+P` -> `SQLite: Open Database`
	* Alternativamente puedes buscar en el men煤 `View` -> `Command Palette` -> `SQLite: Open Database`
* Abre el men煤 contextual sobre la BD y da click sobre `Show Table [sqlite_master]`
* Abre el men煤 contextual sobre la tabla `book` y da click sobre `Show Table`
* Termina la sesi贸n y libera la conexi贸n abriendo el men煤 contextual y dando click sobre la opci贸n `Close Database`

<details>
	<summary>Solucion 馃敄</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` est谩 el c贸digo
* En la carpeta `client` las llamadas que pueden invocarse con la extensi贸n `REST Client`
* En el archivo `package.json` se agreg贸 el script de arranque

</details>