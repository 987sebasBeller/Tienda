import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Injectable significa que es un servicio
@Injectable({
  providedIn: 'root'
})

//  de aqui deberia sacar 
export class ProductoService {
  
  constructor(private http:HttpClient) { }
  // private http:HttpClient -> para obtener de la api
  obtenerTodosLosProductos():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
    // con <tipo> le digo que tipo estoy devolviendo
    // return this.http.get("https://fakestoreapi.com/products");
    //return this.http.get("https://fakestoreapi.com/products"); es un observable conjutno de valores utilizable en el futuro, no hace nada hasta que te suscribas

  }
  obtenerProductoPorId(id:number):Observable<Product>{
   return this.http.get<Product>("https://fakestoreapi.com/products/"+id);
  }
}
