import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { EnsureAuthenticatedGuard } from './guards/ensure-authenticated.guard';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((module) => module.UsersModule),
    canLoad: [IsLoggedInGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule),
    canLoad: [EnsureAuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
