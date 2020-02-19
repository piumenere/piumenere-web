import { AbstractEnvironment, EnvironmentType } from './abstract-environment';

export class Enviroment extends AbstractEnvironment {

  getType(): EnvironmentType {
    return EnvironmentType.prod;
  } 
  getFacebookAppId(): string {
    return '2556092497994302';
  }
  getGoogleAppId(): string {
    return '716019201225-k0bqr14jufoiqooejnc2fu42hkhh248i.apps.googleusercontent.com';
  }

}

export const environment = new Enviroment();