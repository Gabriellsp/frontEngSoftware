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
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
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
        path: 'cadastrar-apartamento',
        loadChildren: () =>
          import('./pages/cadastrar-apartamento/cadastrar-apartamento.module').then((m) => m.CadastrarApartamentoModule),
      },
      {
        path: 'list-casa',
        loadChildren: () =>
          import('./pages/list-casa/list-casa.module').then((m) => m.ListCasaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
