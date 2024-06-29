import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './modules/familia/padre/padre.component';
import { HermanoComponent } from './modules/familia/hermano/hermano.component';
import { NavbarComponent} from './modules/website/navbar/navbar.component';
import { FooterComponent} from './modules/website/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PadreComponent,
    HermanoComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular-Serg';
}
