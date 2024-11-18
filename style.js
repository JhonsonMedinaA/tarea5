function calcularSuma(notas) {
    return notas.reduce((acumulador, nota) => acumulador + nota, 0);
}


function calcularPromedio(notas) {
    const suma = calcularSuma(notas); 
    return suma / notas.length; 
}

// Notas del alumno
const notasAlumno = [6, 8, 9, 2, 5, 10];

// Cálculo del promedio
const promedio = calcularPromedio(notasAlumno);

console.log(`El promedio de las notas del alumno es: ${promedio.toFixed(2)}`);
