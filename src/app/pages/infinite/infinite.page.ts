import { DetallePeliculaPage } from './../detalle-pelicula/detalle-pelicula.page';
import { MensajesService } from 'src/app/services/mensajes.service';
import { PeliculasService } from './../../services/peliculas.service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  
  constructor(private _peliculaService:PeliculasService,
              private _mensajeService:MensajesService,
              private _modalController: ModalController) { }
  @ViewChild('miInfinite') infinite: IonInfiniteScroll;
    
  public datos:Pelicula[] = [];
  public numPage:number = 1;
  public filtrarPor:string = '';

  ngOnInit() {
    this.loadData(null);
  }

  filtrar(ev:any) {
    this.filtrarPor = ev.detail.value;
  }

  async muestraInfoPeicula(peli:Pelicula) {
        const modal = await this._modalController.create({
        component: DetallePeliculaPage,
        componentProps: {
          'titulo': peli.title,
          'pelicula': peli,
        }
      });
      return await modal.present();
    }
  

  async loadData(ev:any) {
    await this._mensajeService.presentLoading('cargando');
    try {
      const datosNuevos = await this._peliculaService.getPeliculasPorGenero('28',this.numPage);
      this.datos.push(...datosNuevos);
      this.numPage++;
    } 
    catch {
      await this._mensajeService.muestramensaje('error recogiendo datos');
    }
    finally {
      await this._mensajeService.stopLoading();
    }
    if(ev){
      this.infinite.complete();
    }
  }
}
