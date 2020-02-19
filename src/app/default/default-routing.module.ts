import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const homeRoute: Route = {
  path: 'home',
  component: HomeComponent
}

const emptyRoute: Route = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}

const routes: Routes = [
  homeRoute,
  emptyRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
