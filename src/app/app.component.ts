import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PadreComponent } from './comp/familia/padre/padre.component';
import { HermanoComponent } from './comp/familia/hermano/hermano.component';
import { NavbarComponent} from './comp/website/navbar/navbar.component';
import { FooterComponent} from './comp/website/footer/footer.component';
import { HomeComponent } from './comp/website/components/home/home.component';
import { PoliticasEnvioComponent } from './comp/website/components/politicas-envio/politicas-envio.component';
import { ProductosComponent } from './comp/website/components/productos/productos.component';
import { CommonModule } from '@angular/common';
import { DetalleProductoComponent } from './comp/website/components/productos/detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule, 
    RouterLink, 
    
    PadreComponent,
    HermanoComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PoliticasEnvioComponent,
    ProductosComponent,
    DetalleProductoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular-Serg';
}
