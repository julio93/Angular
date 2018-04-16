import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { LlenarTablaService } from './llenar-tabla.service';
import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [LlenarTablaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
