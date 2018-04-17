import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { IReservas } from './reservas';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import { Reserva } from './reserva';
import 'rxjs/Rx';

@Injectable()
export class LlenarTablaService {

  private _url: string = '/assets/javascript/reservas.json';

  constructor(private http: Http) {
    console.log('Task Service created.', http);
  }

  reservaciones: Array<Reserva>;

  getReservas(){
    this.http.get(this._url).subscribe((res:Response) => {
      this.reservaciones = res.json();
      console.log(this.reservaciones);
    } )
  }
}


