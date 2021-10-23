import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild('miRefresher') refresher: IonRefresher;
  @ViewChild('miInfinite') infinite: IonInfiniteScroll;

  constructor(private _mensajeService:MensajesService) { }

  ngOnInit() {
  }

  onClick() {
    this._mensajeService.muestramensaje('Usuarios cargados', 1500);
  }
  
  public datos = Array(20);

  refresca(){
    setTimeout(() => {
      let nuevosDatos = Array(10);
      this.datos.push(...nuevosDatos);
      this.refresher.complete();
    }, 1500)
  };

  loadData() {
    setTimeout(() => {
      if (this.datos.length >= 40) {
        this.infinite.complete();
        this.infinite.disabled = true;
        return;
      }

      let nuevosDatos = Array(10);
      this.datos.push(...nuevosDatos);
      this.infinite.complete();
    }, 1500)
  }

}
