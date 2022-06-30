import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './Guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pag2',
    loadChildren: () => import('./Pages/pag2/pag2.module').then( m => m.Pag2PageModule),
    canActivate:[LoginGuard]
  },

  {
    path: 'form',
    loadChildren: () => import('./Pages/form/form.module').then( m => m.FormPageModule)
  },
  
  {
    path: 'pasajero',
    loadChildren: () => import('./Pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./Pages/conductor/conductor.module').then( m => m.ConductorPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
