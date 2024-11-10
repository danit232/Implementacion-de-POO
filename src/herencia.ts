// src/herencia.ts

import { Persona } from './encapsulamiento';

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

export { Estudiante };