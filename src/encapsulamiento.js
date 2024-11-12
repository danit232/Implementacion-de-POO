"use strict";
// src/encapsulamiento.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.Producto = exports.Persona = void 0;
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
class Producto {
    constructor(codigo, nombre, precio, stock) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    getCodigo() {
        return this.codigo;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
    getStock() {
        return this.stock;
    }
    setPrecio(precio) {
        if (precio > 0) {
            this.precio = precio;
        }
    }
    actualizarStock(cantidad) {
        const nuevoStock = this.stock + cantidad;
        if (nuevoStock >= 0) {
            this.stock = nuevoStock;
        }
    }
}
exports.Producto = Producto;
class Animal {
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
        if (edad > 0) {
            this.edad = edad;
        }
    }
}
exports.Animal = Animal;
