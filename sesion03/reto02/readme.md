# Reto 02: `.env` + `babel`

## Objetivo 🎯
 
Unir proyecto `babel` con proyecto `.env`

## Desarrollo 📝

* Inicia desde cero un proyecto donde configures `.env` y `babel`
* prueba el proyecto creando una calculadora aritmética
* usa características de ES6+ como la exportación de funciones lamba asociadas a una constante

<details>
	<summary>Solucion</summary>

* dentro de `src`, crea un archivo `sum.js` con la exportación de una constante que apunte a una función

```js
export const add = (a, b) => a + b
```

* importa la constante en el archivo `index.js` del proyecto
```js
import { add } from "./calc";
```

* usa la función con algunos valores e imprime su resultado
```js
console.log(add(3, 5))
```

> puedes ver el proyecto completo en la carpeta `src` de este reto
</details>
