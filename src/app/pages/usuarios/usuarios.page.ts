import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {



  constructor(private _mensajeService:MensajesService) { }

  ngOnInit() {
  }

  onClick() {
    this._mensajeService.muestramensaje('Usuarios cargados', 1500);
  }

}
