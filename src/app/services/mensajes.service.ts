import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(public toastController:ToastController, public loadingController: LoadingController) { }

  public loading: HTMLIonLoadingElement;

  async muestramensaje(mensaje: string, tiempo?: number){
    let t = tiempo ? tiempo:2000;
    const toast = await this.toastController.create({
      message: mensaje,
      duration: t
    });
    toast.present();
  }

  async presentLoading(t?: number) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Un momentito por favor...',
      duration: t
    });
    await this.loading.present();
  }
    
  async stopLoading() {
      await this.loading.dismiss();
    console.log('Loading dismissed!');
  }
}
