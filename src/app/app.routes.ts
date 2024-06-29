import { Routes } from '@angular/router';
import { HomeComponent } from './comp/website/components/home/home.component';
import { PoliticasEnvioComponent } from './comp/website/components/politicas-envio/politicas-envio.component';
import { ProductosComponent } from './comp/website/components/productos/productos.component';
import { DetalleProductoComponent } from './comp/website/components/productos/detalle-producto/detalle-producto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'politicas-de-envio', component: PoliticasEnvioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'productos/:id', component: DetalleProductoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];
