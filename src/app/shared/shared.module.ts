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

import { authServiceConfigProvider, BaseHrefProvider } from '../providers/providers';
import { IconsModule } from '../icons/icons.module';
import { Environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule.forChild()
  ],
  exports: [
    TranslateModule,
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
    authServiceConfigProvider,
    BaseHrefProvider,
    Environment
  ]
})
export class SharedModule { }
