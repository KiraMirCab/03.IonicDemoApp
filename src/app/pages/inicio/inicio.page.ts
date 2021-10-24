import { ComponentesService } from './../../services/componentes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  public misComponentes: Componente[]=[];
  
  constructor(private _componentesService:ComponentesService) { }

  async ngOnInit() {
    try {
      this.misComponentes = (await this._componentesService.getComponents()).componentes;
      console.log(this.misComponentes);
    } catch (error) {
      console.log("Error recibiendo los datos de la promesa");
    }
  };

}
