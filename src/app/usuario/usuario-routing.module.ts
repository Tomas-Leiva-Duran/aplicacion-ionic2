import { TablinksPageModule } from './../tablinks/tablinks.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPage } from './usuario.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPage
  },
  {
    path: 'inicio', redirectTo:'inicioPage', pathMatch:'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPageRoutingModule {}
