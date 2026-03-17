estudiantes = []

def cargar_estudiante():
    nombre = input('Ingrese nombre del estudiante: ')
    edad = int(input('Ingrese edad del estudiante: '))
    nota = float(input('Ingrese nota del estudiante: '))
    estudiantes.append([nombre, edad, nota])

def consulta_carga():
    response = input('¿Desea cargar otro estudiante? (si/no): ')
    if response.lower() == 'si':
        cargar_estudiante()
        consulta_carga()
    elif response.lower() == 'no':
        mostrar_resultados()
    else:
        print('Por favor ingrese "si" o "no"')
        consulta_carga()

def mostrar_resultados():
    print('\n--- Lista de estudiantes ---')
    for nombre, edad, nota in estudiantes:
        print(f'Nombre: {nombre} | Edad: {edad} | Nota: {nota}')

    print('\n--- Lista ordenada por nota ---')
    ordenados = sorted(estudiantes, key=lambda x: x[2], reverse=True)
    for nombre, edad, nota in ordenados:
        print(f'Nombre: {nombre} | Edad: {edad} | Nota: {nota}')

    promedio = sum(x[2] for x in estudiantes) / len(estudiantes)
    print(f'\nPromedio general: {promedio:.2f}')

print('=== Sistema de carga de estudiantes ===\n')
cargar_estudiante()
consulta_carga()