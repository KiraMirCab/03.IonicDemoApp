import { Pelicula } from './../../interfaces/pelicula';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {

  constructor(private _modalController:ModalController) { }
  @Input() titulo:string;
  @Input() pelicula:Pelicula;
  public puntuacion: number = 5;

  ngOnInit() {
    console.log(this.pelicula);
  }
  cerrar() {
    this._modalController.dismiss();
  }

  cambiaPuntuacion(event:any) {
      this.puntuacion = event.detail.value
  }

  guardarCambios(gardar:boolean){
    if(!gardar) {
      console.log('sin guardar cambios en la pelicula')
      this._modalController.dismiss();
    }
    else {
      console.log('guardando cambios en la pelicula');
      this._modalController.dismiss();
    }
  }
}
