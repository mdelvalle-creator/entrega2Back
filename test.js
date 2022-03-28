const Contenedor = require('./Contenedor')

const container = new Contenedor(`${__dirname}/productos.txt`);

container.save({
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'urlToThumbnailEscuadra'
});

console.log('all is good');
