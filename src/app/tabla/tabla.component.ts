import { Component, OnInit } from '@angular/core';
import { LlenarTablaService } from '../llenar-tabla.service';
import {Http} from '@angular/http';
import { Reserva } from '../reserva';
import 'rxjs/Rx';


@Component({
  selector: 'app-tabla',
  providers:[LlenarTablaService],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {

  reservaciones: Array<Reserva>;
  private _url: string = '/assets/javascript/reservas.json';

  constructor(public _llenarTabla: LlenarTablaService) { 
    _llenarTabla.getReservas();
    //console.log(this.reservaciones);
  }


  ngOnInit() {
    
  }


}
