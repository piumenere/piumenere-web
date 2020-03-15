import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environmentType } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { EnvironmentType } from 'src/environments/abstract-environment';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateModuleLoaderConfig } from './providers/providers';

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
    TranslateModule.forRoot(TranslateModuleLoaderConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environmentType === EnvironmentType.prod })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
