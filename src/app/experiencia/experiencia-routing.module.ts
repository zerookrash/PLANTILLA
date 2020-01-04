import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienciaListComponent } from './experiencia-list/experiencia-list.component';


const routes: Routes = [
  {
    path: '',
    component: ExperienciaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienciaRoutingModule { }
