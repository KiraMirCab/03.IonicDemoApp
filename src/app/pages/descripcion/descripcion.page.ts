import { Router } from '@angular/router';
import { Pelicula } from './../../interfaces/pelicula';
import { PeliculasService } from './../../services/peliculas.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})
export class DescripcionPage implements OnInit {
  public pelicula:Pelicula;

  constructor(private _peliculaService:PeliculasService,
              private _router:Router) { }

  ngOnInit() {
    if(!this._peliculaService.peliculaActual){
      this._router.navigate(['inicio']);
    }
    this.pelicula = this._peliculaService.peliculaActual;
  }

}
