import { Component, inject } from '@angular/core';
import { MiembroComponent } from '../../elementos/miembro/miembro.component';
import { Miembro } from '../../interfaces/miembro';
import { MiembroService } from '../../services/miembro.service';
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
    this.miembros=this.miembroService.obtenerMiembros();
  }
}
