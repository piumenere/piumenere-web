import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig } from "angularx-social-login";
import { FactoryProvider } from '@angular/core';
import { environment } from 'src/environments/environment';

export const authServiceConfigProvider: FactoryProvider = {
    provide: AuthServiceConfig,
    useFactory: () => new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.getGoogleAppId())
        },
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.getFacebookAppId())
        }
    ])
}