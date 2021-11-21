import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultadoPeliculas, Pelicula } from '../interfaces/pelicula';
import { Actor, ResultadoActores } from '../interfaces/actores';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http: HttpClient) { }

  public peliculaActual:Pelicula;

  getPeliculasPorGenero(id:string, page:number) {
    const cadena = `${environment.urlPeli}${id}&page=${page}`;
    return new Promise<Pelicula[]>((resolve, reject) => {
      this._http.get<ResultadoPeliculas>(cadena).subscribe(resp => {
        if(resp.results.length==0) {
          reject(new Error('Error recogiendo los datos'));
        }
        resolve(resp.results);
      }, err=>{
        reject(err);
      });
    });
  }
  
  getActores(id:number) {
    const cadena = `${environment.urlActores}${id}/casts?api_key=${environment.api_key}`;
      return new Promise<Actor[]>((resolve, reject) => {
        this._http.get<ResultadoActores>(cadena).subscribe(resp => {
        if(resp.cast.length==0) {
          reject(new Error('Error recogiendo los datos'));
        }
          resolve(resp.cast);
      }, err=>{
        reject(err);
      });
    });
  }
}
