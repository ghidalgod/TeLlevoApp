import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasajeroPage } from './pasajero.page';
import { PasajeroComponent } from 'src/app/Components/pasajero/pasajero.component';
import { MapaComponent } from 'src/app/Components/mapa/mapa.component';


const routes: Routes = [
  {
    path: '',
    component: PasajeroPage,
    children:[
      {
        path:'pasajero',
        component:PasajeroComponent
      },
      {
        path:'mapa',
        component:MapaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class PasajeroPageRoutingModule {}
