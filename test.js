const Contenedor = require('./Contenedor')

const testFunction = async () => {
    const container = new Contenedor(`${__dirname}/productos.txt`);
    await container.save({
        title: 'Escuadra',
        price: 123.45,
        thumbnail: 'urlToThumbnailEscuadra'
    });

    let contenido = await container.getAll();
    console.log('Agrego escuadra ', contenido);
    
    await container.save({
        title: 'Regla',
        price: 567.89,
        thumbnail: 'urlToThumbnailRegla'
    });

    contenido = await container.getAll();
    console.log('Agrego regla ', contenido);
    
    await container.save({
        title: 'Semi Circulo',
        price: 1000,
        thumbnail: 'urlToThumbnailSemicirculo'
    });

    contenido = await container.getAll();
    console.log('Agrego Semicirculo ', contenido);

    contenido = await container.getById(3);
    console.log('Obtengo Semicirculo ', contenido);
    
    await container.deleteById(3);

    contenido = await container.getAll();
    console.log('Obtengo todos menos Semicirculo ', contenido);
    
    await container.deleteAll();
    
    contenido = await container.getAll();
    console.log('Elimino todos ', contenido);
    
    console.log('Test completed');
}

testFunction();
