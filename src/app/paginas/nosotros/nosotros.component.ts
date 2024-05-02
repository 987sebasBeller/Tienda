import { Component } from '@angular/core';
import { ProductoComponent } from '../../elementos/producto/producto.component';
@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {

}
