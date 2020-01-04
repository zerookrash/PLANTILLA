import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';



const routes: Routes = [
  {
    path: '',
    component: ContactoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
