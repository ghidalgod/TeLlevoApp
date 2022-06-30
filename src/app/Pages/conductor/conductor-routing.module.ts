import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConductorComponent } from 'src/app/Components/conductor/conductor.component';
import { ConductorPage } from './conductor.page';


const routes: Routes = [
  {
    path: '',
    component: ConductorPage,
    children:[
      {
        path:'conductor',
        component:ConductorComponent
      }
]
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorPageRoutingModule {}
