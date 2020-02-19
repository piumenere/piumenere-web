import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const loginRoute: Route = {
  path: 'login',
  component: LoginComponent
}

export const defaultRoute: Route = {
  path: 'default',
  loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)
}

const routes: Routes = [
  loginRoute,
  defaultRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
