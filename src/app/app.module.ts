import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { EnvironmentType } from 'src/environments/abstract-environment';

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.getType() === EnvironmentType.prod })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
