import  *  as  package_json  from  '../../package.json';

export enum EnvironmentType {
    dev,
    prod
}

export abstract class AbstractEnvironment {

    getVersion(): string {
        return package_json.version;
    };
    abstract getType(): EnvironmentType;
    abstract getFacebookAppId(): string;
    abstract getGoogleAppId(): string;

}
