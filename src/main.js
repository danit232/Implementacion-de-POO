"use strict";
// src/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const encapsulamiento_1 = require("./encapsulamiento");
const herencia_1 = require("./herencia");
const polimorfismo_1 = require("./polimorfismo");
const persona = new encapsulamiento_1.Persona('Carlos', 30);
console.log(`Persona: ${persona.getNombre()}, ${persona.getEdad()} años`);
const estudiante = new herencia_1.Estudiante('Ana', 22, '2022001');
console.log(`Estudiante: ${estudiante.getNombre()}, ${estudiante.getEdad()} años, Matrícula: ${estudiante.getMatricula()}`);
const profesor = new polimorfismo_1.Profesor('Luis', 40, 'Matemáticas');
console.log(`Profesor: ${profesor.getNombre()}, ${profesor.getEdad()} años, Materia: ${profesor.getMateria()}`);
console.log((0, polimorfismo_1.presentarPersona)(persona));
console.log((0, polimorfismo_1.presentarPersona)(estudiante));
console.log((0, polimorfismo_1.presentarPersona)(profesor));
