import { DetallePeliculaPage } from './../detalle-pelicula/detalle-pelicula.page';
import { MensajesService } from 'src/app/services/mensajes.service';
import { PeliculasService } from './../../services/peliculas.service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonList, ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  
  constructor(private _peliculaService:PeliculasService,
              private _mensajeService:MensajesService,
              private _modalController: ModalController,
              private _router:Router) { }
  @ViewChild('miInfinite') infinite: IonInfiniteScroll;
  @ViewChild('miList') miList: IonList;

    
  public datos:Pelicula[] = [];
  public numPage:number = 1;
  public filtrarPor:string = '';

  ngOnInit() {
    this.loadData(null);
  }

  veAPelicula(item:Pelicula) {
    this._peliculaService.peliculaActual = item;
    this._router.navigate(['ficha-pelicula']);
  }

  filtrar(ev:any) {
    this.filtrarPor = ev.detail.value;
  }

  async muestraInfoPeicula(peli:Pelicula) {
        this.miList.closeSlidingItems();
        const modal = await this._modalController.create({
        component: DetallePeliculaPage,
        componentProps: {
          'titulo': peli.title,
          'pelicula': {
            adult: peli.adult,
            backdrop_path: peli.backdrop_path,
            genre_ids: peli.genre_ids,
            id: peli.id,
            original_language: peli.original_language,
            original_title: peli.original_title,
            overview: peli.overview,
            popularity: peli.popularity,
            poster_path: peli.poster_path,
            release_date: peli.release_date,
            title: peli.title,
            video: peli.video,
            vote_average: peli.vote_average,
            vote_count: peli.vote_count,
          }
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      if(data){
        peli.title = data.pelicula.title;
        peli.vote_average = Math.floor(data.pelicula.vote_average * 100) / 100;
        peli.vote_count = data.pelicula.vote_count;
      }
      console.log(data);
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
