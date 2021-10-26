import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild('miRefresher') refresher: IonRefresher;
  @ViewChild('miInfinite') infinite: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  public datos = Array(20);

  refresca(){
    setTimeout(() => {
      let nuevosDatos = Array(10);
      this.datos.push(...nuevosDatos);
      this.refresher.complete();
    }, 1500)
  };

  loadData() {
    setTimeout(() => {
      if (this.datos.length >= 40) {
        this.infinite.complete();
        this.infinite.disabled = true;
        return;
      }

      let nuevosDatos = Array(10);
      this.datos.push(...nuevosDatos);
      this.infinite.complete();
    }, 1500)
  }
}
