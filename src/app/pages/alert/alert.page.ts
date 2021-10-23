import { Boton } from './../../interfaces/boton';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public botones: Boton[] = [
    {
      nombre: "Cuidado",
      numero: 1,
      color: "medium"
    },
    {
      nombre: "Matrix",
      numero: 2,
      color: "dark"
    },
    {
      nombre: "Confirma",
      numero: 3,
      color: "tertiary"
    },
    {
      nombre: "Conocerte",
      numero: 4,
      color: "success"
    },
    {
      nombre: "Pecados",
      numero: 5,
      color: "warning"
    },
    {
      nombre: "Cine",
      numero: 6,
      color: "danger"
    }]

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async onclick(numero: number) {

    switch (numero) {
      case 1:
        this.presentAlert();
        break;
      case 2:
        this.presentAlertMultipleButtons();
        break;
      case 3:
        this.presentAlertConfirm();
        break;
      case 4:
        this.presentAlertPrompt();
        break;
      case 5:
        this.presentAlertRadio();
        break;
      case 6:
        this.presentAlertCheckbox();
        break;
      default:
        break;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      subHeader: 'Cuestion de vida o muerte',
      message: 'Si confirmas este mensaje, eres una patata',
      buttons: ['Sí']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hola Neo',
      message: '¿Qué pastilla te vas a tomar?',
      buttons: [
        {
          text: 'La roja',
          handler: () => {
            console.log('Bienvenido a Matrix');
          }
        },
        {
          text: 'la azul',
          handler: () => {
            console.log('sigue viviendo tu vida de esclavo');
          }
        },
        {
          text: 'veneno',
          handler: () => {
            console.log('dame veneno que quiero moriiii');
          }
        }]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirma!',
      message: 'Habrá que confirmar este mensaje <strong>ahora mismo</strong>!!!',
      buttons: [
        {
          text: 'Jamás',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('No te fías de mi, eh?');
          }
        }, {
          text: 'Bueeeeno, vaaaaale',
          handler: () => {
            console.log('Buen chico');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Hablemos de ti!',
      inputs: [
        {
          name: 'edad',
          type: 'number',
          placeholder: '¿Cuántos años tienes?'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Tienes hijos?'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Hablame de tus gustos'
        },        
        {
          name: 'pin',
          type: 'password',
          placeholder: 'El pin de tu tarjeta bancaria',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'integer'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: '¿Cuál es tu pecado principal?',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Soberbia',
          value: 'Soberbia',
          handler: () => {
            console.log('Opcion 1');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Ira',
          value: 'Ira',
          handler: () => {
            console.log('Opcion 2');
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Avaricia',
          value: 'Avaricia',
          handler: () => {
            console.log('Opcion 3');
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Envidia',
          value: 'Envidia',
          handler: () => {
            console.log('Opcion 4');
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Lujuria',
          value: 'Lujuria',
          handler: () => {
            console.log('Opcion 5');
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Gula',
          value: 'Gula',
          handler: () => {
            console.log('Opcion 6');
          }
        },
        {
          name: 'radio7',
          type: 'radio',
          label: 'Pereza',
          value: 'Pereza',
          handler: () => {
            console.log('Opcion 7');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Ciencia ficción',
          value: 'si fi',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Comedia',
          value: 'comedia',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Drama',
          value: 'drama',
          handler: () => {
            console.log('En serio?');
          }
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Terror',
          value: 'terror',
          handler: () => {
            console.log('Checkbox 4 selected');
          },
          checked: true
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Acción',
          value: 'accion',
          handler: () => {
            console.log('Checkbox 5 selected');
          },
          checked: true
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Musical',
          value: 'musical',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Odio el cine',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Nunca seremos amigos');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Gracias amante de '+ data);
          }
        }
      ]
    });

    await alert.present();
  }
}