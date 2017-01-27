import { Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { FormComponent }  from './form/form.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormComponent }
];
