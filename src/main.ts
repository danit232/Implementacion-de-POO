// src/main.ts

import { Persona } from './encapsulamiento';
import { Estudiante } from './herencia';
import { Profesor, presentarPersona } from './polimorfismo';

const persona = new Persona('Carlos', 30);
console.log(`Persona: ${persona.getNombre()}, ${persona.getEdad()} años`);

const estudiante = new Estudiante('Ana', 22, '2022001');
console.log(`Estudiante: ${estudiante.getNombre()}, ${estudiante.getEdad()} años, Matrícula: ${estudiante.getMatricula()}`);

const profesor = new Profesor('Luis', 40, 'Matemáticas');
console.log(`Profesor: ${profesor.getNombre()}, ${profesor.getEdad()} años, Materia: ${profesor.getMateria()}`);

console.log(presentarPersona(persona));
console.log(presentarPersona(estudiante));
console.log(presentarPersona(profesor));