//Este creo que ni lo terminé porque ni me acuerdo el task jaja salu2


type Persona = {
    name: string;
    age: number;
}


type Profesor = Persona & {
    subjects: string[];
    yearsOfExperience: number;
}


type Alumno = Persona & {
    dni: number;
    subjects: string,
    faltas: number,
    profesor: string,
}

const Alumnos: Alumno[] = []


const Profesores: Profesor[] = [{
    name: "Matias",
    age: 18,
    subjects: ["Lengua"],
    yearsOfExperience: 5
}]  

const createAlumno = (alumno : Alumno) :void => {
    Alumnos.push(alumno);
}

const addProfesor = (profesor: Profesor) :void => {
    Profesores.push(profesor);
}


const updateProfesor = (name: string, property: string, newValue: any) => {
    const profesor = Profesores.find(prof => prof.name === name)
    if (profesor) {
        profesor[property] = newValue;
    }
    else {
        console.log('No se encontró el profesor, por lo tanto no se puede cambiar propiedad')
    }
}

const addSubject = (name: string, newSubject: string) => {
    const profesor = Profesores.find (prof => prof.name === name)
    if (profesor) {
        profesor.subjects.push(newSubject);
    }
    else {
        console.log('No se encontró profesor, por lo tanto no se puede cambiar materia')
    }
}






addProfesor({
    name: "Jorgito",
    age: 27,
    subjects: ["Matematicas"],
    yearsOfExperience: 4,
});

updateProfesor("Matias", "age", 30);
updateProfesor("Jorgito", "yearsOfExperience", 10);
updateProfesor("Lucas","age",18);

addSubject("Jorgito","Typescript")
addSubject("Matias","Javascript")
addSubject("Lucas","fono")

createAlumno({
    name: "Pedro",
    age: 12,
    dni: 37153477,
    subjects: "Lengua",
    faltas: 3,
    profesor: "Ramirez"
})
//console.log(Profesores)
console.log(Alumnos)