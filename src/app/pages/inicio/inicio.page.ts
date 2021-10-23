import { Component, OnInit, ViewChild } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  public misComponentes: Componente[]=[
    {
      nombre: "Action-sheet",
      ruta: "/action-sheet",
      icono: "trash",
      color: "primary"
    },
    {
      nombre: "Alert",
      ruta: "/alert",
      icono: "add",
      color: "success"
    },
    {
      nombre: "Ususarios",
      ruta: "/usuarios",
      icono: "person",
      color: "danger"
    }
  ];

  ngOnInit() {
  };

}
