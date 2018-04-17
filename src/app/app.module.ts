import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { LlenarTablaService } from './llenar-tabla.service';
import {HttpModule} from '@angular/http';
import {AppRoutingModule, routingComponents} from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LlenarTablaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
