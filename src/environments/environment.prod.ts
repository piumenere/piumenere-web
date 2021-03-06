import { AbstractEnvironment, EnvironmentType } from './abstract-environment';

export const environmentType: EnvironmentType  = EnvironmentType.prod;

export class Environment extends AbstractEnvironment {

  getType(): EnvironmentType {
    return environmentType;
  } 
  getFacebookAppId(): string {
    return '2556092497994302';
  }
  getGoogleAppId(): string {
    return '716019201225-19kph86i3lphru4hm619qr5oohe7i1i4.apps.googleusercontent.com';
  }
  getOpenApiUrl(): string {
    return 'https://services.piumenere.it/openapi';
  }
  getBatchUrl(): string {
    return 'https://batch.piumenere.it';
  }

}

export const environment = new Environment();