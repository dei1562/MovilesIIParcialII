import { Vehiculo } from './customer.vehiculo';

export interface Customer{
    key?: string,
    cedula: number,
    nombre: string,
    apellido: string,
    vehiculos: Array<Vehiculo>
}