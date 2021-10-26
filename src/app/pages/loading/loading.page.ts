import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private _mensajeService: MensajesService) { }

  ngOnInit() {
  }

  onClick() {
    this._mensajeService.presentLoading(2000);
  }
}
