import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciaRoutingModule } from './experiencia-routing.module';
import { ExperienciaListComponent } from './experiencia-list/experiencia-list.component';


@NgModule({
  declarations: [ExperienciaListComponent],
  imports: [
    CommonModule,
    ExperienciaRoutingModule
  ]
})
export class ExperienciaModule { }
