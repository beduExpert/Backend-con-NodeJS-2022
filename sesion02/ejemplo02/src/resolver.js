// definición de `resolvers`
const resolver = {
    saludo: () => {
        return 'Hola beto!';
    },
    experto: ({ id }) => {
        return expertos.find(e => e.id == id)
    },
};

const expertos = [
    { id: 333, nombre: 'Ethien', apellido: 'Salinas' },
    { id: 334, nombre: 'Pedro', apellido: 'Fragoso' },
    { id: 335, nombre: 'Abraham', apellido: 'Tonix' },
]

module.exports = { resolver }