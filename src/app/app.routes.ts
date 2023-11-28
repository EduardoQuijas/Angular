import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '**', redirectTo: 'inicio', pathMatch: 'full' },];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
  })
  export class AppRoutingModule { }
