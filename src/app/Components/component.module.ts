import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ConductorComponent } from './conductor/conductor.component';

import { MapaComponent } from './mapa/mapa.component';
import { PasajeroComponent } from './pasajero/pasajero.component';



@NgModule({
    declarations: [
 
        ConductorComponent,

        MapaComponent,
        PasajeroComponent,

    ],
    exports: [
   
        ConductorComponent,
 
        MapaComponent,
        PasajeroComponent,

    ],
    imports: [
      CommonModule,
      IonicModule
    ]
  })
  export class ComponentsModule { }