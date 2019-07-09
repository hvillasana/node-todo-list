const argv = require('./configs/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('LISTADO DE TAREAS'.green);
        for (let tarea of listado) {
            console.log('===================='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.terminado}`);
            console.log('===================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.terminado);    
        console.log(actualizado);    
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no identificado');
        break;
}
