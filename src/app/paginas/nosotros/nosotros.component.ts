import { Component, inject } from '@angular/core';
import { MiembroComponent } from '../../elementos/miembro/miembro.component';
import { Miembro } from '../../interfaces/miembro';
import { MiembroService } from '../../services/miembro.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [MiembroComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss',
})
export class NosotrosComponent {
  miembros:Miembro[]=[];
  miembroService:MiembroService=inject(MiembroService);
  constructor(){
    this.miembroService.obtenerMiembros().subscribe(
      data=>this.miembros=data,
      error=>console.log(error),
      ()=>console.log("FIN")
    );
    console.log(this.miembros)
    //this.miembros=this.miembroService.obtenerMiembros();
  }
}
