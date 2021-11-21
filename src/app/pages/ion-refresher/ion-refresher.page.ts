import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-ion-refresher',
  templateUrl: './ion-refresher.page.html',
  styleUrls: ['./ion-refresher.page.scss'],
})
export class IonRefresherPage implements OnInit {

  @ViewChild('miRefresher') refresher: IonRefresher;
  
  constructor() { }

  ngOnInit() {
  }

  public datos = Array(10);

  refresca(){
    setTimeout(() => {
      let nuevosDatos = Array(10);
      this.datos.push(...nuevosDatos);
      this.refresher.complete();
    }, 1500)
  };

}
