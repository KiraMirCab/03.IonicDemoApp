import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async muestra() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Te parece bien?',
      message: '<strong>Confirma esto o explota</strong>!!!',
      buttons: [
        {
          text: 'Ni de coña',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Poh claro',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
