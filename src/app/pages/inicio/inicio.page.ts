import { ComponentesService } from './../../services/componentes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';
import { MenuController } from '@ionic/angular';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  public misComponentes: Componente[]=[];
  
  constructor(private _componentesService:ComponentesService, 
              private menu: MenuController,
              private _mensajeService: MensajesService) { }

  async ngOnInit() {
    
    await this._mensajeService.presentLoading('Cargando...');    
    try {
      this.misComponentes = (await this._componentesService.getComponents()).componentes;
      console.log(this.misComponentes);
    } catch (error) {
      this._mensajeService.muestramensaje("Error en el servidor");
    } finally{
      await this._mensajeService.stopLoading(); 
      }
    
  };
}
