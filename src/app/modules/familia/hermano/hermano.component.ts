import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../../../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit {
  nombre ?: string;
  saludo : string = '';
  constructor(
    private _servicioFamiliarService:ServicioFamiliarService,
  ){}

  ngOnInit(): void {
    this._servicioFamiliarService.getNombreHermanoMenor();
  }
  
  ingresarNombre(){
    this._servicioFamiliarService.setNombreHermanoMenor("Nicolás");
  }
  saludar(){
    this.saludo = this._servicioFamiliarService.saludar(this._servicioFamiliarService.getNombreHermanoMayor());
  }
}
