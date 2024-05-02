import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  // muy comun poner guin
  selector: 'app-root',
  standalone: true,
  // RouterLink,RouterLinkActive aniadimos estos para el menu
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  // porque el routerlinkActive-> cuando este seleccionado aniadile una clase que se llame active 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primer';
}
