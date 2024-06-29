import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent {
  data = [
    { id: 1, nombre: 'Taza', precio: 1000, color: 'rojo' },
    { id: 2, nombre: 'Mouse pad', precio: 5000, color: 'blue' },
    { id: 3, nombre: 'Teclado', precio: 24000, color: 'rgb' }
  ];
}
