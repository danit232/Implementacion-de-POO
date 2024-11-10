"use strict";
// src/herencia.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const encapsulamiento_1 = require("./encapsulamiento");
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
}
exports.Estudiante = Estudiante;
