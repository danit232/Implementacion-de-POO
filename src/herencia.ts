// src/herencia.ts

import { Persona, Producto, Animal } from './encapsulamiento';


class Estudiante extends Persona {
    private matricula: string;

    constructor(nombre: string, edad: number, matricula: string) {
        super(nombre, edad);
        this.matricula = matricula;
    }

    public getMatricula(): string {
        return this.matricula;
    }

    public setMatricula(matricula: string): void {
        this.matricula = matricula;
    }
}

class ProductoElectronico extends Producto {
    private garantiaMeses: number;
    private voltaje: number;

    constructor(codigo: string, nombre: string, precio: number, stock: number, garantiaMeses: number, voltaje: number) {
        super(codigo, nombre, precio, stock);
        this.garantiaMeses = garantiaMeses;
        this.voltaje = voltaje;
    }

    public getGarantiaMeses(): number {
        return this.garantiaMeses;
    }

    public getVoltaje(): number {
        return this.voltaje;
    }

    public extenderGarantia(mesesAdicionales: number): void {
        this.garantiaMeses += mesesAdicionales;
    }
}

class Perro extends Animal {
    private raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad);
        this.raza = raza;
    }

    public getRaza(): string {
        return this.raza;
    }

    public ladrar(): string {
        return `¡Guau! Soy ${this.getNombre()}`;
    }
}

class Gato extends Animal {
    private color: string;

    constructor(nombre: string, edad: number, color: string) {
        super(nombre, edad);
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public maullar(): string {
        return `¡Miau! Soy ${this.getNombre()}`;
    }
}


export { Estudiante, ProductoElectronico, Gato, Perro };