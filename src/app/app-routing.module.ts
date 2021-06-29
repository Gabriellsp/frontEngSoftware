import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'cadastrar-casa',
        loadChildren: () =>
          import('./pages/cadastrar-casa/cadastrar-casa.module').then((m) => m.CadastrarCasaModule),
      },
      {
        path: 'cadastrar-bairro',
        loadChildren: () =>
          import('./pages/cadastrar-bairro/cadastrar-bairro.module').then((m) => m.CadastrarBairroModule),
      },
      {
        path: 'cadastrar-apartamento',
        loadChildren: () =>
          import('./pages/cadastrar-apartamento/cadastrar-apartamento.module').then((m) => m.CadastrarApartamentoModule),
      },
      {
        path: 'list-casa',
        loadChildren: () =>
          import('./pages/list-casa/list-casa.module').then((m) => m.ListCasaModule),
      },
      {
        path: 'list-apartamento',
        loadChildren: () =>
          import('./pages/list-apartamento/list-apartamento.module').then((m) => m.ListApartamentoModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
