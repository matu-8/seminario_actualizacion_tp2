import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const estudiantes = [];

const cargaEstudiante = async () => {
  const nombre = await rl.question("Ingrese nombre del estudiante: ");
  const edad = await rl.question("Ingrese edad del estudiante: ");
  const nota = await rl.question("Ingrese nota del estudiante: ");
  estudiantes.push([nombre, parseInt(edad), parseFloat(nota)]);
};

const consultaCarga = async () => {
  const response = await rl.question(
    "¿Desea cargar otro estudiante? (si/no): ",
  );
  if (response.match(/^(si)$/i)) {
    await cargaEstudiante();
    await consultaCarga();
  } else if (response.match(/^(no)$/i)) {
    mostrarResultados();
    rl.close();
  } else {
    console.log('Por favor ingrese "si" o "no"');
    await consultaCarga();
  }
};

const mostrarResultados = () => {
  console.log("\n--- Lista de estudiantes ---");
  estudiantes.forEach(([nombre, edad, nota]) => {
    console.log(`Nombre: ${nombre} | Edad: ${edad} | Nota: ${nota}`);
  });

  console.log("\n--- Lista ordenada por nota ---");
  const ordenados = [...estudiantes].sort((a, b) => b[2] - a[2]);
  ordenados.forEach(([nombre, edad, nota]) => {
    console.log(`Nombre: ${nombre} | Edad: ${edad} | Nota: ${nota}`);
  });
  //   console.table(ordenados);

  const promedio =
    estudiantes.reduce((acc, [, , nota]) => acc + nota, 0) / estudiantes.length;
  console.log(`\nPromedio general: ${promedio.toFixed(2)}`);
};

const main = async () => {
  console.log("=== Sistema de carga de estudiantes ===\n");
  await cargaEstudiante();
  await consultaCarga();
};

main();
