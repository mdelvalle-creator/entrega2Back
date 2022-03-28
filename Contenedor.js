const fs = require('fs');

class Contenedor {
    constructor(nombreArchivo) {
      this.nombreArchivo = nombreArchivo;
      fs.promises.readFile(nombreArchivo, 'utf-8')
        .then((contenido) => {
            console.log(contenido);
            this.fileObject = JSON.parse(contenido)})
        .catch(err => console.log('Error al leer el archivo: ', err));
    }
    save(objeto) {
        const id = this.fileObject.lastId + 1;
        this.fileObject.list[id] = {...objeto, id};
        this.fileObject.lastId = id;
        fs.promises.writeFile(this.nombreArchivo, this,JSON.stringify(this.fileObject))
            .then(() => console.log('Guardado Exitoso!'))
            .catch(err => console.log('Ocurrio un error al guardar: ', err));

    }
    getById(id) {
        return this.fileObject.list[id];
    }
    getAll() {
        return Object.keys(this.fileObject.list).map(id => this.fileObject.list[id]);
    }
    deleteById(id) {
        delete this.fileObject.list[id];
        fs.promises.writeFile(this.nombreArchivo, this,JSON.stringify(this.fileObject))
            .then(() => console.log('Eliminado del item exitoso!'))
            .catch(err => console.log('Ocurrio un error al eliminar: ', err));
    }
    deleteAll() {
        this.fileObject.list = [];
        fs.promises.writeFile(this.nombreArchivo, this,JSON.stringify(this.fileObject))
            .then(() => console.log('Eliminado exitoso!'))
            .catch(err => console.log('Ocurrio un error al eliminar: ', err));
    }
  }

module.exports =  Contenedor ;