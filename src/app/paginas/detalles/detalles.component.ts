import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss'
})
export class DetallesComponent {
route:ActivatedRoute=inject(ActivatedRoute);
productoService:ProductoService=inject(ProductoService);
// como se recupera el producto se recupera un detalle del producto 
// ! de accercion no nulo, se que el detalle nunca sera nulo, ni undefined
detalleDeProducto!:Product;
constructor(){
  const idProducto = Number(this.route.snapshot.params['id']);
  this.productoService.obtenerProductoPorId(idProducto).subscribe(
    data=>this.detalleDeProducto=data,
    error=>console.log(error),
    ()=>console.log("FIN")
  );
  //this.route.snapshot.params['id'] -> recuperamos los parametros del url
}

}
// activate routes -> nos permite recuperar de la url
