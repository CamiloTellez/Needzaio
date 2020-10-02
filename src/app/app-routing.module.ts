import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
