// src/encapsulamiento.ts

class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }
}


class Producto {
    private codigo: string;
    private nombre: string;
    private precio: number;
    private stock: number;

    constructor(codigo: string, nombre: string, precio: number, stock: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getStock(): number {
        return this.stock;
    }

    public setPrecio(precio: number): void {
        if (precio > 0) {
            this.precio = precio;
        }
    }

    public actualizarStock(cantidad: number): void {
        const nuevoStock = this.stock + cantidad;
        if (nuevoStock >= 0) {
            this.stock = nuevoStock;
        }
    }
}

class Animal {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setEdad(edad: number): void {
        if (edad > 0) {
            this.edad = edad;
        }
    }
}
export { Persona, Producto, Animal };