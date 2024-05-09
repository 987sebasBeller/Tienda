import { Injectable } from '@angular/core';
import { Miembro } from '../interfaces/miembro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiembroService {
  miembros: Miembro[] = [];
  constructor(private http:HttpClient) {}
  obtenerMiembros():Observable<Miembro[]>{
    return this.http.get<Miembro[]>("https://jsonplaceholder.typicode.com/users");
    //return this.miembros;
  }
}
