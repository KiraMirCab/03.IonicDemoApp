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
      this.puntuacion = event.detail.value;
  }

  cambiaTitulo(ev:any) {
    this.titulo = ev.detail.value;
    this.pelicula.title = ev.detail.value;
  }

  guardarCambios(gardar:boolean){
    if(!gardar) {
      console.log('sin guardar cambios en la pelicula')
      this._modalController.dismiss();
    }
    else {
      let pTotal = this.pelicula.vote_average * this.pelicula.vote_count;
      let veces = this.pelicula.vote_count + 1;
      let nuevaPMedia = (pTotal + this.puntuacion)/veces;
      this.pelicula.vote_average = nuevaPMedia;
      this.pelicula.vote_count = veces;
      console.log('guardando cambios en la pelicula');
      this._modalController.dismiss({
        titulo:this.titulo,
        pelicula:this.pelicula
      });
    }
  }
}
