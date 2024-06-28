import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  HermanoMayor : string = '';
  HermanoMenor : string = '';

  constructor() { }

  setNombreHermanoMayor(nombre : string){
    this.HermanoMayor = nombre;
  }
  setNombreHermanoMenor(nombre : string){
    this.HermanoMenor = nombre;
  }
  getNombreHermanoMayor(): string{
    return this.HermanoMayor;
  }
  getNombreHermanoMenor(): string{
    return  this.HermanoMenor;
  }

  saludar(hermano : string){
    console.log('Hola ${hermano}');
    return hermano;
  }
  
}
