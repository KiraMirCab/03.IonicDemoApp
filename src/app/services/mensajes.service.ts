import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(public toastController:ToastController) { }


  async muestramensaje(mensaje: string, tiempo?: number){
    let t = tiempo ? tiempo:2000;
    const toast = await this.toastController.create({
      message: mensaje,
      duration: t
    });
    toast.present();
  }
}
