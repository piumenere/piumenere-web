import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UpdateService {

    constructor(
        private swUpdate: SwUpdate
    ) {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.pipe(
                filter(() => confirm())
            ).subscribe(() => this.swUpdate.activateUpdate().then(() => window.location.reload()));
        }
    }

}
