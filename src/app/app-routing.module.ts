import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TablaComponent} from './tabla/tabla.component'
import {AgregarReservaComponent} from './agregar-reserva/agregar-reserva.component'
import {VerReservaComponent} from './ver-reserva/ver-reserva.component'

const routes: Routes = [
    { path: '', redirectTo: '/tablaReservas', pathMatch: 'full'},
    { path: 'tablaReservas', component: TablaComponent},
    { path: 'agregar', component: AgregarReservaComponent},
    { path: 'ver', component: VerReservaComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AgregarReservaComponent, VerReservaComponent]