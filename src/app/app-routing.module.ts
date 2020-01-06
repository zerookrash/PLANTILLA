import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'experiencia',
    loadChildren: './experiencia/experiencia.module#ExperienciaModule'
  },
  {
    path: 'portafolio',
    loadChildren: './portafolio/portafolio.module#PortafolioModule'
  },
  {
    path: 'contacto',
    loadChildren: './contacto/contacto.module#ContactoModule'
  },
  {
    path: 'general',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
