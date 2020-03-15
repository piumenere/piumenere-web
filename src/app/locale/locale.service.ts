import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

@Injectable({
    providedIn: 'root',
})
export class LocaleService {

    constructor(
        public translate: TranslateService
    ) {
        if (!localStorage.getItem('locale')) {
            if (!this.translate.getBrowserLang()) {
              localStorage.setItem('locale', 'en');
            } else {
              localStorage.setItem('locale', this.translate.getBrowserLang());
            }
          }
          registerLocaleData(localeIt, 'it');
      
          const localeId = localStorage.getItem('locale');
          this.translate.setDefaultLang(localeId);
          this.translate.use(localeId);
    }

}
