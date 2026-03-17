import * as readline from 'node:readline'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//Array principal
const estudiantes = [];

//Una funcion para agregar estudiantes
//!Atento porque rl.question es asincrono, ya que espera la entrada del usuario antes de seguir
const consultaCarga = async () => {
    rl.question('Ingrese nombre del estudiante: ', (nombre) => {
        //revisar construccion de array
        const carga = new Array [nombre] 
        carga.push(nombre)
        rl.question('Ingrese edad del estudiante: ', (edad)=>{
            carga.push(edad)
        })
        rl.question('Ingrese not del estudiante: ', (nota)=>{
            carga.push(nota)
        })
        estudiantes.push(carga)
        console.log(estudiantes);
        console.log('Datos cargados correctamente');
        rl.close();

    }
    )
}
consultaCarga();