import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule()
export class IconsModule {

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        this.iconRegistry.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }

}
