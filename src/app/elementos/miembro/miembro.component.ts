import { Component, Input } from '@angular/core';
import { Miembro } from '../../interfaces/miembro';

@Component({
  selector: 'app-miembro',
  standalone: true,
  imports: [],
  templateUrl: './miembro.component.html',
  styleUrl: './miembro.component.scss'
})
export class MiembroComponent {
  @Input() miembro!:Miembro;
}
