import { Component, OnInit } from '@angular/core';
import { LlenarTablaService } from '../llenar-tabla.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public reservas = [];

  constructor(private _llenarTabla: LlenarTablaService) { }

  ngOnInit() {
    this._llenarTabla.getReservas()
    .subscribe(data => this.reservas = data);
  }

}
