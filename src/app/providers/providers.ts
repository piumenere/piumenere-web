import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig } from "angularx-social-login";
import { FactoryProvider, StaticProvider, LOCALE_ID } from '@angular/core';
import { Environment } from 'src/environments/environment';
import { TranslateModuleConfig, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import urlJoin from 'proper-url-join';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

export class DynamicLocaleId extends String {
    constructor(protected service: TranslateService) {
        super();
    }

    toString() {
        return this.service.currentLang;
    }
}

export const LocaleProvider: StaticProvider = {
    provide: LOCALE_ID,
    useClass: DynamicLocaleId,
    deps: [TranslateService]
};

export const authServiceConfigProvider: FactoryProvider = {
    provide: AuthServiceConfig,
    useFactory: (environment: Environment) => new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.getGoogleAppId())
        },
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.getFacebookAppId())
        }
    ]),
    deps: [ Environment ]
}

export class BaseHrefTranslateHttpLoader extends TranslateHttpLoader {

    constructor(http: HttpClient, baseHref: string, environment: Environment) {
        super(http);
        this.prefix = urlJoin(baseHref, this.prefix, {
            trailingSlash: true
        });
        this.suffix = this.suffix + '?version=' + environment.getVersion();
    }

}

export function CreateTranslateLoader(http: HttpClient, baseHref: string, environment: Environment) {
    return new BaseHrefTranslateHttpLoader(http, baseHref, environment);
}

export const TranslateProvider: FactoryProvider = {
    provide: TranslateLoader,
    useFactory: CreateTranslateLoader,
    deps: [
        HttpClient,
        APP_BASE_HREF,
        Environment
    ]
};

export const TranslateModuleLoaderConfig: TranslateModuleConfig = {
    loader: TranslateProvider
};

export function GetBaseHref(platformLocation: PlatformLocation): string {
    return platformLocation.getBaseHrefFromDOM();
}

export const BaseHrefProvider: FactoryProvider = {
    provide: APP_BASE_HREF,
    useFactory: GetBaseHref,
    deps: [
        PlatformLocation
    ]
};
