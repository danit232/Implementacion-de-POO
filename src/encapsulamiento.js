"use strict";
// src/encapsulamiento.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }
}
exports.Persona = Persona;
