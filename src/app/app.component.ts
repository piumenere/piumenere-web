import { Component, ViewChild } from '@angular/core';
import { UpdateService } from './update/update-service';
import { MatSidenav } from '@angular/material/sidenav';
import { StateService } from './state/state-service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { loginRoute, defaultRoute } from './app-routing.module';
import { LocaleService } from './locale/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'piumenere-web';

  @ViewChild(MatSidenav)
  private sidenav: MatSidenav;

  constructor(
    router: Router,
    public updateService: UpdateService,
    stateService: StateService,
    public localService: LocaleService
  ) {
    stateService.logged.pipe(
      filter(logged => !logged)
    ).subscribe(
      () => router.navigate([loginRoute.path])
    )
    stateService.logged.pipe(
      filter(logged => logged)
    ).subscribe(
      () => router.navigate([defaultRoute.path])
    )
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

}
