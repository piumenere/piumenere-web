import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { SocialLoginModule } from 'angularx-social-login';

import { authServiceConfigProvider } from '../providers/providers';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  exports: [
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    SocialLoginModule,
    IconsModule
  ],
  providers: [
    authServiceConfigProvider
  ]
})
export class SharedModule { }
