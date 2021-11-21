import { MensajesService } from 'src/app/services/mensajes.service';
import { Pelicula } from './../../interfaces/pelicula';
import { PeliculasService } from './../../services/peliculas.service.service';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actores';

@Component({
  selector: 'app-ficha-pelicula',
  templateUrl: './ficha-pelicula.page.html',
  styleUrls: ['./ficha-pelicula.page.scss'],
})
export class FichaPeliculaPage implements OnInit {

  public pelicula:Pelicula;
  public actores:Actor[];
  public numActores:number = 5;
  
  constructor(private _peliculaService:PeliculasService,
              private _mensajeService:MensajesService) { }

  async ngOnInit() {
    this.pelicula = this._peliculaService.peliculaActual;
    try{
      this.actores = await this._peliculaService.getActores(this.pelicula.id);
      this.numActores = this.actores.length;
    } 
    catch{
      await this._mensajeService.muestramensaje('error recogindo los datos');
    } finally {
      await this._mensajeService.stopLoading();
    }
  }
}
