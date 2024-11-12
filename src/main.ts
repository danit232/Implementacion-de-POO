// src/main.ts
import { Persona, Producto, Animal } from './encapsulamiento';
import { 
    Estudiante, 
    ProductoElectronico, 
    Perro,
    Gato
} from './herencia';
import { 
    Profesor, 
    ProductoAlimenticio, 
    presentarPersona,
    mostrarInformacionProducto,
    hacerSonido 
} from './polimorfismo';


console.log('===== DEMOSTRACIÓN DE PERSONAS =====');
// Ejemplo con Persona base
const persona = new Persona('Carlos', 30);
console.log(`Persona: ${persona.getNombre()}, ${persona.getEdad()} años`);

// Ejemplo con Estudiante
const estudiante = new Estudiante('Ana', 22, '2022001');
console.log(`Estudiante: ${estudiante.getNombre()}, ${estudiante.getEdad()} años, Matrícula: ${estudiante.getMatricula()}`);

// Ejemplo con Profesor
const profesor = new Profesor('Luis', 40, 'Matemáticas');
console.log(`Profesor: ${profesor.getNombre()}, ${profesor.getEdad()} años, Materia: ${profesor.getMateria()}`);

// Demostración de polimorfismo con personas
console.log('\n--- Polimorfismo con Personas ---');
console.log(presentarPersona(persona));
console.log(presentarPersona(estudiante));
console.log(presentarPersona(profesor));

console.log('\n===== DEMOSTRACIÓN DE PRODUCTOS =====');
// Ejemplo con Producto base
const producto = new Producto('P001', 'Producto Base', 100, 50);
console.log(`Producto Base - Código: ${producto.getCodigo()}, Nombre: ${producto.getNombre()}, Precio: $${producto.getPrecio()}, Stock: ${producto.getStock()}`);

// Ejemplo con ProductoElectronico
const productoElectronico = new ProductoElectronico('E001', 'Smartphone', 799.99, 30, 12, 110);
console.log(`
    Producto Electrónico:
    - Nombre: ${productoElectronico.getNombre()}
    - Precio: $${productoElectronico.getPrecio()}
    - Stock: ${productoElectronico.getStock()}
    - Garantía: ${productoElectronico.getGarantiaMeses()} meses
    - Voltaje: ${productoElectronico.getVoltaje()}V
`);

// Ejemplo con ProductoAlimenticio
const productoAlimenticio = new ProductoAlimenticio('A001', 'Yogurt', 2.99, 100, new Date('2024-12-31'));
console.log(`
    Producto Alimenticio:
    - Nombre: ${productoAlimenticio.getNombre()}
    - Precio: $${productoAlimenticio.getPrecio()}
    - Stock: ${productoAlimenticio.getStock()}
    - Fecha de Caducidad: ${productoAlimenticio.getFechaCaducidad().toLocaleDateString()}
`);

// Demostración de polimorfismo con productos
console.log('\n--- Polimorfismo con Productos ---');
console.log(mostrarInformacionProducto(producto));
console.log(mostrarInformacionProducto(productoElectronico));
console.log(mostrarInformacionProducto(productoAlimenticio));


console.log('\n===== DEMOSTRACIÓN DE ANIMALES =====');
// Ejemplo con Animal base
const animal = new Animal('Animal Genérico', 5);
console.log(`Animal: ${animal.getNombre()}, Edad: ${animal.getEdad()} años`);

// Ejemplo con Perro
const perro = new Perro('Max', 3, 'Labrador');
console.log(`
    Perro:
    - Nombre: ${perro.getNombre()}
    - Edad: ${perro.getEdad()} años
    - Raza: ${perro.getRaza()}
`);

// Ejemplo con Gato
const gato = new Gato('Luna', 2, 'Negro');
console.log(`
    Gato:
    - Nombre: ${gato.getNombre()}
    - Edad: ${gato.getEdad()} años
    - Color: ${gato.getColor()}
`);


// Demostración de polimorfismo con animales
console.log('\n--- Polimorfismo con Animales ---');
console.log(hacerSonido(animal));
console.log(hacerSonido(perro));
console.log(hacerSonido(gato));

// Demostración de métodos específicos de animales
console.log('\n--- Métodos Específicos de Animales ---');
console.log('Comportamientos específicos:');
console.log(`- ${perro.getNombre()}: ${perro.ladrar()}`);
console.log(`- ${gato.getNombre()}: ${gato.maullar()}`);

// Demostración de modificación de propiedades
console.log('\n--- Modificación de Propiedades ---');
console.log(`Edad inicial de ${perro.getNombre()}: ${perro.getEdad()} años`);
perro.setEdad(4);
console.log(`Nueva edad de ${perro.getNombre()}: ${perro.getEdad()} años`);

console.log(`Edad inicial de ${gato.getNombre()}: ${gato.getEdad()} años`);
gato.setEdad(3);
console.log(`Nueva edad de ${gato.getNombre()}: ${gato.getEdad()} años`);


// Demostración de métodos específicos
console.log('\n===== DEMOSTRACIÓN DE MÉTODOS ESPECÍFICOS =====');

// Actualizando stock de producto
console.log('\n--- Actualización de Stock ---');
console.log(`Stock inicial del producto base: ${producto.getStock()}`);
producto.actualizarStock(10);
console.log(`Stock después de añadir 10 unidades: ${producto.getStock()}`);

// Extendiendo garantía de producto electrónico
console.log('\n--- Extensión de Garantía ---');
console.log(`Garantía inicial del smartphone: ${productoElectronico.getGarantiaMeses()} meses`);
productoElectronico.extenderGarantia(12);
console.log(`Garantía después de extensión: ${productoElectronico.getGarantiaMeses()} meses`);
