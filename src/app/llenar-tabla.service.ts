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

  // getReservas()
  // {
  //   return this.http.get(this._url).map( (responseData) => {
  //     console.log("hola");
  //     return responseData.json();
  //   }).map((reservaciones: Array<any>) => {
  //     console.log("hola x2");
  //     let result:Array<Reserva> = [];
  //     if (reservaciones) {
  //       console.log("hola x3");
  //     Array.from(reservaciones).forEach((reserva) => {
  //       console.log("hola x4");
  //       result.push(new Reserva(reserva.hora, reserva.alumno, reserva.instructor, 
  //         reserva.horas_vuelo,reserva.horas_instruct,reserva.observacion));
  //         console.log(this.reservaciones.length);
  //     });
  //   }
  //   return result;
  // });
  // }

  getReservas(){
    this.http.get(this._url).subscribe((res:Response) => {
      this.reservaciones = res.json();
      console.log(this.reservaciones);
    } )
  }
}


