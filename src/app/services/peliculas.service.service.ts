import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultadoPeliculas, Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http: HttpClient) { }

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
}
