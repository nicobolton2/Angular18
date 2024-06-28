import { Component, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';


@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [
    HijoComponent,
  ],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})


export class PadreComponent implements OnInit {
  nombre : string = '';
  saludo : string = '';

  constructor(
    private  _servicioFamiliarService: ServicioFamiliarService,
  ){}

  ngOnInit(): void{
    this._servicioFamiliarService.getNombreHermanoMayor();
  }

  ingresarNombre(){
    this._servicioFamiliarService.setNombreHermanoMayor("Tamara");
  }
  saludar(){
    this.saludo = this._servicioFamiliarService.saludar(this._servicioFamiliarService.getNombreHermanoMenor());
  }
}
