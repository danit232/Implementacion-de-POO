// src/polimorfismo.ts
import { Persona, Producto, Animal } from './encapsulamiento';
import { ProductoElectronico, Gato, Perro } from './herencia';

class Profesor extends Persona {
    private materia: string;

    constructor(nombre: string, edad: number, materia: string) {
        super(nombre, edad);
        this.materia = materia;
    }

    public getMateria(): string {
        return this.materia;
    }

    public setMateria(materia: string): void {
        this.materia = materia;
    }

    public presentar(): string {
        return `Soy el profesor ${this.getNombre()} y enseño ${this.materia}.`;
    }
}

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

    public presentar(): string {
        return `Soy el estudiante ${this.getNombre()} y mi matrícula es ${this.matricula}.`;
    }
}

function presentarPersona(persona: Persona): string {
    if (persona instanceof Profesor) {
        return persona.presentar();
    } else if (persona instanceof Estudiante) {
        return persona.presentar();
    } else {
        return `Soy ${persona.getNombre()} y tengo ${persona.getEdad()} años.`;
    }
}


class ProductoAlimenticio extends Producto {
    private fechaCaducidad: Date;

    constructor(codigo: string, nombre: string, precio: number, stock: number, fechaCaducidad: Date) {
        super(codigo, nombre, precio, stock);
        this.fechaCaducidad = fechaCaducidad;
    }

    public getFechaCaducidad(): Date {
        return this.fechaCaducidad;
    }

    public presentar(): string {
        return `Producto alimenticio ${this.getNombre()}, caduca el ${this.fechaCaducidad.toLocaleDateString()}`;
    }
}

function mostrarInformacionProducto(producto: Producto): string {
    if (producto instanceof ProductoElectronico) {
        return `Producto electrónico: ${producto.getNombre()} - Garantía: ${producto.getGarantiaMeses()} meses`;
    } else if (producto instanceof ProductoAlimenticio) {
        return producto.presentar();
    } else {
        return `Producto: ${producto.getNombre()} - Stock: ${producto.getStock()}`;
    }
}

function hacerSonido(animal: Animal): string {
    if (animal instanceof Perro) {
        return animal.ladrar();
    } else if (animal instanceof Gato) {
        return animal.maullar();
    } else {
        return `${animal.getNombre()} hace un sonido`;
    }
}


export { Profesor, Estudiante, presentarPersona, ProductoAlimenticio, mostrarInformacionProducto, hacerSonido };