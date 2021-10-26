import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from './interfaces/componente';
import { ComponentesService } from './services/componentes.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private menu: MenuController, private _componentesService:ComponentesService) {}
  public misComponentes: Componente[]=[];
  
  async ngOnInit() {
    try {
      this.misComponentes = (await this._componentesService.getComponents()).componentes;
      console.log(this.misComponentes);
    } catch (error) {
      console.log("Error recibiendo los datos de la promesa");
    }
  }

}
