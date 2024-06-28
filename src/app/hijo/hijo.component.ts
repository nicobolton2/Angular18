import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  
  @Output() parriba = new EventEmitter <any>;
  @Output() pabajo = new EventEmitter <any>;
  
  
  aumentar(){
    this.parriba.emit();
  }
  disminuir(){
    this.pabajo.emit();
  }
 
}
