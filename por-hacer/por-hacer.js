const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(error) =>{
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        terminado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();    
    return listadoPorHacer;
}

const actualizar = (descripcion,completado = true) =>{
    cargarDB(); 
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].terminado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB(); 
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index => 0) {
        listadoPorHacer.splice(index,index);
        guardarDB();
        return true;        
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}