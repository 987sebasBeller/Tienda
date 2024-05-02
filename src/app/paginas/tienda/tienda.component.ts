import { Component } from '@angular/core';
import { ProductoComponent } from '../../elementos/producto/producto.component';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent {
  productoFake:Product={
    "id": 2,
    "title": "Camisa de algodón a rayas",
    "price": 39.99,
    "description": "Camisa de manga larga hecha de suave algodón a rayas, perfecta para un look casual o formal.",
    "category": "Camisas",
    "image": "https://media.gq.com.mx/photos/5f20cddb51bcbdbc95b1331e/master/pass/CAMISA%20TALLA.jpg",
    "rating": {
        "rate": 4.5,
        "count": 15
    }
} // es la interfaz que creaste interfaz =  clase
}
