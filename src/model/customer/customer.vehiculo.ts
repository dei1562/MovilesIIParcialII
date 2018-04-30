import { Multa } from './customer.vehiculo.multa';

export interface Vehiculo{
    key?: string,
    placa: string,
    modelo: string,
    year: number,
    multas: Array<Multa>
}