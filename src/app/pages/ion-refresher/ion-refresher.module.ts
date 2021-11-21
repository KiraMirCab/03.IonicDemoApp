import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRefresherPageRoutingModule } from './ion-refresher-routing.module';

import { IonRefresherPage } from './ion-refresher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRefresherPageRoutingModule,
    ComponentesModule
  ],
  declarations: [IonRefresherPage]
})
export class IonRefresherPageModule {}
