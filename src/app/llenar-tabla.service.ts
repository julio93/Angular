import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReservas } from './reservas';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LlenarTablaService {

  private _url: string = "/assets/javascript/reservas.json";

  constructor(private http: HttpClient) {}

  getReservas():Observable<IReservas[]>
  {
    return this.http.get<IReservas[]>(this._url);
  }
}


