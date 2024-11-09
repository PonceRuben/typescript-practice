// Define una interfaz Curso con propiedades como nombre , profesor (tipo Profesor , del
//     ejercicio anterior) y estudiantes (un array de Estudiante ). Implementa una función que
//     permita crear un curso y asignarle un profesor y una lista de estudiantes. Luego, crea una
//     función que, dado el nombre de un curso, devuelva una lista con los nombres de los
//     estudiantes inscritos.
    
type Persona = {
    name: string;
    age: number;
}


type Profesor = Persona & {
    subjects: string[];
    yearsOfExperience: number;
}

interface Curso {
    nombre: string,
    profesor: Profesor,
    estudiantes: string[],
}

const Typescript: Curso = {
    nombre: "Curso de Typescript",
    profesor: {name: "Prof. Jorge", age: 27, subjects: ["Typescript","Javascript"], yearsOfExperience: 5},
    estudiantes: ["Manuel"]
}

const Cursos: Curso[] = [];


const newCurso = (curso : Curso) => {
    Cursos.push(curso);
}




const studentsList = (nombre: string) => {
    let cursos = Cursos.find(curso => curso.nombre === nombre)
    if (cursos) {
        console.log(cursos.estudiantes);
    }
}


newCurso({
    nombre: "Curso de Javascript",
    profesor: {name: "Máximo Cozzeti", age: 30, subjects: ["Inglés"], yearsOfExperience: 2},
    estudiantes: ["Pedro","Gustavo","Rogelio"],
})

newCurso({
    nombre: "Curso de React",
    profesor: {name: "Prof. Agustín Gonzalez", age: 22, subjects: ["React"], yearsOfExperience: 7},
    estudiantes: ["Pedro","Martina","Agustin","Federico"],
})


console.log(Cursos)
studentsList("Curso de React")













// type Student = {
//     name: string,
//     age: number,
//     marks: number[],
// }

// const Alumno: Student[] =[{
//     name: "Jorge",
//     age: 22,
//     marks: [6],
// }]






