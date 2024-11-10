"use strict";
// src/polimorfismo.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = exports.Profesor = void 0;
exports.presentarPersona = presentarPersona;
const encapsulamiento_1 = require("./encapsulamiento");
class Profesor extends encapsulamiento_1.Persona {
    constructor(nombre, edad, materia) {
        super(nombre, edad);
        this.materia = materia;
    }
    getMateria() {
        return this.materia;
    }
    setMateria(materia) {
        this.materia = materia;
    }
    presentar() {
        return `Soy el profesor ${this.getNombre()} y enseño ${this.materia}.`;
    }
}
exports.Profesor = Profesor;
class Estudiante extends encapsulamiento_1.Persona {
    constructor(nombre, edad, matricula) {
        super(nombre, edad);
        this.matricula = matricula;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    presentar() {
        return `Soy el estudiante ${this.getNombre()} y mi matrícula es ${this.matricula}.`;
    }
}
exports.Estudiante = Estudiante;
function presentarPersona(persona) {
    if (persona instanceof Profesor) {
        return persona.presentar();
    }
    else if (persona instanceof Estudiante) {
        return persona.presentar();
    }
    else {
        return `Soy ${persona.getNombre()} y tengo ${persona.getEdad()} años.`;
    }
}
