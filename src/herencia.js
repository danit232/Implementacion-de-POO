"use strict";
// src/herencia.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = exports.Gato = exports.ProductoElectronico = exports.Estudiante = void 0;
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
class ProductoElectronico extends encapsulamiento_1.Producto {
    constructor(codigo, nombre, precio, stock, garantiaMeses, voltaje) {
        super(codigo, nombre, precio, stock);
        this.garantiaMeses = garantiaMeses;
        this.voltaje = voltaje;
    }
    getGarantiaMeses() {
        return this.garantiaMeses;
    }
    getVoltaje() {
        return this.voltaje;
    }
    extenderGarantia(mesesAdicionales) {
        this.garantiaMeses += mesesAdicionales;
    }
}
exports.ProductoElectronico = ProductoElectronico;
class Perro extends encapsulamiento_1.Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }
    getRaza() {
        return this.raza;
    }
    ladrar() {
        return `¡Guau! Soy ${this.getNombre()}`;
    }
}
exports.Perro = Perro;
class Gato extends encapsulamiento_1.Animal {
    constructor(nombre, edad, color) {
        super(nombre, edad);
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    maullar() {
        return `¡Miau! Soy ${this.getNombre()}`;
    }
}
exports.Gato = Gato;
