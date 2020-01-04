import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioListComponent } from './portafolio-list/portafolio-list.component';


const routes: Routes = [
  {
    path: '',
    component: PortafolioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
