import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';


@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [
    HijoComponent,
  ],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})


export class PadreComponent {

  value : number = 0;

  aumentar(){
    this.value ++ ;
  }
  disminuir(){
    this.value -- ;
  }
}
