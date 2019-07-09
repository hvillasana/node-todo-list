const argv = require('yargs')
        .command('crear','Crea un elemento por hacer',{
            descripcion:{
                demand:true,
                alias:'d',
                desc:'Descripcion de la tarea por hacer'
            }
        })
        .command('actualizar','Actualia un elemento',{
            descripcion:{
                demand:true,
                alias:'d',
                desc:'Descripcion de la tarea por hacer'
            },
            completado:{
                default:true,
                alias:'c',
                desc:'Marca como completado o pendiente la tarea'
            }
        })
        .command('borrar','Elimina un elemento del listado',{
            descripcion:{
                demand:true,
                alias:'d',
                desc:'Descripcion de la tarea por hacer'
            }
        })
        .help()
        .argv;


module.exports = {
    argv
}
