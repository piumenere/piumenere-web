export enum EnvironmentType {
    dev,
    prod
}

export abstract class AbstractEnvironment {

    abstract getType(): EnvironmentType;
    abstract getFacebookAppId(): string;
    abstract getGoogleAppId(): string;

}
