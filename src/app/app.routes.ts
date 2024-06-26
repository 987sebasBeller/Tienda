import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetallesComponent } from './paginas/detalles/detalles.component';
// archivo para configurar rutas, incuimos objetos de ruta
export const routes: Routes = [
    {path:'inicio',component:InicioComponent},
    {path:'tienda',component:TiendaComponent},
    {path:'nosotros',component:NosotrosComponent},
    {path:'contactanos',component:ContactanosComponent},
    //detalles/:id -> este es el parametro, recuro atraves de la url el id y pido a la api ese producto
    {path:'detalles/:id',component:DetallesComponent},

    //  cuando no exista nada a mi pagina entonces redirigime a nicio
    {path:'',redirectTo:'inicio',pathMatch:'full'},

    // el ** es un comodin para cualquiera que no encontro
    {path:'**', component:PaginaNoEncontradaComponent}

    // {path:ruta,component:La clase componente }
];
