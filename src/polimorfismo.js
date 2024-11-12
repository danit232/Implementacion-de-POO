"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoAlimenticio = exports.Estudiante = exports.Profesor = void 0;
exports.presentarPersona = presentarPersona;
exports.mostrarInformacionProducto = mostrarInformacionProducto;
exports.hacerSonido = hacerSonido;
// src/polimorfismo.ts
const encapsulamiento_1 = require("./encapsulamiento");
const herencia_1 = require("./herencia");
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
class ProductoAlimenticio extends encapsulamiento_1.Producto {
    constructor(codigo, nombre, precio, stock, fechaCaducidad) {
        super(codigo, nombre, precio, stock);
        this.fechaCaducidad = fechaCaducidad;
    }
    getFechaCaducidad() {
        return this.fechaCaducidad;
    }
    presentar() {
        return `Producto alimenticio ${this.getNombre()}, caduca el ${this.fechaCaducidad.toLocaleDateString()}`;
    }
}
exports.ProductoAlimenticio = ProductoAlimenticio;
function mostrarInformacionProducto(producto) {
    if (producto instanceof herencia_1.ProductoElectronico) {
        return `Producto electrónico: ${producto.getNombre()} - Garantía: ${producto.getGarantiaMeses()} meses`;
    }
    else if (producto instanceof ProductoAlimenticio) {
        return producto.presentar();
    }
    else {
        return `Producto: ${producto.getNombre()} - Stock: ${producto.getStock()}`;
    }
}
function hacerSonido(animal) {
    if (animal instanceof herencia_1.Perro) {
        return animal.ladrar();
    }
    else if (animal instanceof herencia_1.Gato) {
        return animal.maullar();
    }
    else {
        return `${animal.getNombre()} hace un sonido`;
    }
}
