// Ejercicio POO 1:

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        console.log(`Hola, me llamo ${this.nombre} y soy una ${this.genero} de ${this.edad} años.`);
    }
}

let miPersona = new Persona ("Júlia", "2", "niña");
miPersona.obtDetalles();


// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super (nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`Hola me llamo ${this.nombre} y soy una ${this.genero} de ${this.edad} del curso ${this.curso} del grupo ${this.grupo}`)
    }
};

let miEstudiante = new Estudiante("Júlia", "2", "niña", "1º", "1A");
miEstudiante.registrar();


// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        console.log(`Hola me llamo ${this.nombre}, tengo ${this.edad}, y soy ${this.genero} de ${this.asignatura} en ${this.nivel}.`)
    }
};

let miProfesor = new Profesor ("Manuel", "31", "profesor", "Literatura", "2º ESO");
miProfesor.asignar();

