import { Component, inject } from '@angular/core';
import { ProductoComponent } from '../../elementos/producto/producto.component';
import { Product } from '../../interfaces/product';
import { ProductoService } from '../../services/producto.service';
// {} -> es un objeto
/*
el objeto tiene un selector
el selector no se usa para las paginas solo para elementos
*/
@Component({
  // selector: 'app-tienda',// se borra porque no necesitamos ay redireccionamos con el router
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})

//  es la clase del componente, los datos no deberian estar aqui, deberian ser gestionados por un servicios
export class TiendaComponent {
//   productoFake:Product={
//     "id": 2,
//     "title": "Camisa de algodón a rayas",
//     "price": 39.99,
//     "description": "Camisa de manga larga hecha de suave algodón a rayas, perfecta para un look casual o formal.",
//     "category": "Camisas",
//     "image": "https://media.gq.com.mx/photos/5f20cddb51bcbdbc95b1331e/master/pass/CAMISA%20TALLA.jpg",
//     "rating": {
//         "rate": 4.5,
//         "count": 15
//     }
// } // es la interfaz que creaste interfaz =  clase


// necesitamos una propiedad QUE ALMACENE PRODUCTOS
productosFake:Product[]=[];
// injectamos un obejto en el compoentne, a apartir de eso ya puedo usar ese objeto como un singleton
productService:ProductoService=inject(ProductoService); // injectamos 
 constructor(){
  this.productosFake=this.productService.obtenerTodosLosProductos();
 }
/*constructor( private productoService:ProductoService){
  // cramos una instancia ->private productoService:ProductoService, es como un SINGLETON
  this.productoService.obtenerTodosLosProductos();
 }*/

}
