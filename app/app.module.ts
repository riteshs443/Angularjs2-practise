import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { FormComponent }  from './form/form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule, 
  RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  declarations: [ AppComponent, HomeComponent, FormComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
