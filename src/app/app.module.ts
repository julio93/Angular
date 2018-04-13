import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { LlenarTablaService } from './llenar-tabla.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LlenarTablaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
