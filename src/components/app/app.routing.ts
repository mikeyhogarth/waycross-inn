import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TaproomComponent } from './display/taproom/taproom.component';
import { AboutComponent } from './display/about/about.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/taproom', pathMatch: 'full' },
  { path: 'taproom', component: TaproomComponent },
  { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);