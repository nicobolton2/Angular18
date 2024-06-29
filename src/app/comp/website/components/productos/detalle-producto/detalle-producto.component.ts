import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  data = [
    { id: 1, nombre: 'Taza', precio: 1000, color: 'rojo', detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 2, nombre: 'Mouse pad', precio: 5000, color: 'blue', detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, nombre: 'Teclado', precio: 24000, color: 'rgb', detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
  ];
  
  producto: any; // Variable para almacenar el producto filtrado

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Obtener el ID del parámetro de la ruta
    this.producto = this.data.find(item => item.id === id); // Filtrar el producto por ID y asignarlo a `producto`
  }
}



