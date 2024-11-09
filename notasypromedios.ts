//Crea un tipo personalizado llamado Estudiante que represente a un alumno, con propiedades como nombre , edad y notas (un array de números). Implementa una función que permita agregar una nueva nota a un estudiante dado su nombre, y otra función que calcule el promedio de notas de un estudiante. Asegúrate de tipar correctamente cada elemento

type Student = {
    name: string,
    age: number,
    marks: number[],
}



const Alumno: Student[] =[{
    name: "Jorge",
    age: 22,
    marks: [6],
}]

const addMark = (name: string, newMark: number) => {
    const student = Alumno.find(a => a.name === name);
    if (student) {
        student.marks.push(newMark);
    }
    else {
        console.log("No se ha encontrado el alumno")
    }
}


const calculateMean = (name: string) => {
    const student = Alumno.find(a => a.name === name);
    if (student)
        {const sum = student.marks.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
        const mean = sum / student.marks.length;
        console.log(`El promedio de ${name} es: ${mean}`)}
    else {
        console.log("No se ha encontrado el alumno")
    }   

}

console.log(Alumno)
addMark("Jorge", 5)
addMark("Jorge", 10)
addMark("Gaston", 9)
console.log(Alumno)
calculateMean("Jorge",)