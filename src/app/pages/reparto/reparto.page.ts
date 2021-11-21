import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Pelicula } from './../../interfaces/pelicula';
import { Actor } from './../../interfaces/actores';
import { PeliculasService } from './../../services/peliculas.service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.page.html',
  styleUrls: ['./reparto.page.scss'],
})
export class RepartoPage implements OnInit {
  
  public pelicula:Pelicula;
  public actores:Actor[];
  
  constructor(private _peliculaService:PeliculasService,
              private _mensajeService:MensajesService,
              private _router:Router) { }
  
  async ngOnInit() {
    if(!this._peliculaService.peliculaActual){
      this._router.navigate(['inicio']);
    }
    this.pelicula = this._peliculaService.peliculaActual;
    this.pelicula = this._peliculaService.peliculaActual;
    await this._mensajeService.presentLoading('cargando');
    
    try{
      this.actores = await this._peliculaService.getActores(this.pelicula.id);
      console.log(this.actores);
    } 
    catch{
      await this._mensajeService.muestramensaje('error recogindo los datos');
    } finally {
      await this._mensajeService.stopLoading();
    }
  }

}
