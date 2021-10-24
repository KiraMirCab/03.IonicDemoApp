import { Componente, Componentes } from './../interfaces/componente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(private _http:HttpClient) { }
  
  getComponents() {
    return new Promise<Componentes>((resolve, reject) => {
      const url = '../../assets/componentes.json'
      this._http.get<Componentes>(url).subscribe(componente=>{
        resolve(componente);
      }, err=>{
        console.log('Hay un error en el get');
        reject(err);
      });
    });
  }
}
  