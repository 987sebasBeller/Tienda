import { Injectable } from '@angular/core';
import { Miembro } from '../interfaces/miembro';

@Injectable({
  providedIn: 'root',
})
export class MiembroService {
  miembros: Miembro[] = [
    {
      nombre: 'Leanne Graham',
      id: 1,
      email: 'Sincere@april.biz',
      telefono: '1-770-736-8031',
    },
    {
      nombre: 'Ervin Howell',
      id: 2,
      email: 'Shanna@melissa.tv',
      telefono: '010-692-6593',
    },
    {
      nombre: 'Clementine Bauch',
      id: 3,
      email: 'Nathan@yesenia.net',
      telefono: '1-463-123-4447',
    },
    {
      nombre: 'Patricia Lebsack',
      id: 4,
      email: 'Julianne.OConner@kory.org',
      telefono: '493-170-9623',
    },
    {
      nombre: 'Chelsey Dietrich',
      id: 5,
      email: 'Lucio_Hettinger@annie.ca',
      telefono: '(254)954-1289',
    },
    {
      nombre: 'Mrs. Dennis Schulist',
      id: 6,
      email: 'Karley_Dach@jasper.info',
      telefono: '1-477-935-8478',
    },
    {
      nombre: 'Kurtis Weissnat',
      id: 7,
      email: 'Telly.Hoeger@billy.biz',
      telefono: '210.067.6132',
    },
    {
      nombre: 'Nicholas Runolfsdottir V',
      id: 8,
      email: 'Sherwood@rosamond.me',
      telefono: '586.493.6943',
    },
    {
      nombre: 'Glenna Reichert',
      id: 9,
      email: 'Chaim_McDermott@dana.io',
      telefono: '(775)976-6794',
    },
    {
      nombre: 'Clementina DuBuque',
      id: 10,
      email: 'Rey.Padberg@karina.biz',
      telefono: '024-648-3804',
    },
  ];
  constructor() {}
  obtenerMiembros(){
    return this.miembros;
  }
}
