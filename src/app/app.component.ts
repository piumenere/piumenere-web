import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { UpdateService } from './update/update-service';
import { MatSidenav } from '@angular/material/sidenav';
import { StateService } from './state/state-service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { loginRoute, defaultRoute } from './app-routing.module';
import { LocaleService } from './locale/locale.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SwaggerComponent } from './swagger/swagger.component';
import { Environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'piumenere-web';

  private dialogConfig = new MatDialogConfig<void>();

  @ViewChild(MatSidenav)
  private sidenav: MatSidenav;

  constructor(
    router: Router,
    public updateService: UpdateService,
    stateService: StateService,
    public localService: LocaleService,
    public dialog: MatDialog,
    private container: ViewContainerRef,
    private environment: Environment
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

  public swagger(): void {
    this.dialogConfig.viewContainerRef = this.container;
    this.dialogConfig.disableClose = false;
    this.dialogConfig.hasBackdrop = true;
    this.dialogConfig.maxWidth = '90vw';
    this.dialogConfig.maxHeight = '90vh';
    this.dialogConfig.height = '90%';
    this.dialogConfig.width = '90%';
    this.dialog.open(SwaggerComponent, this.dialogConfig);
  }

  public batch(): void {
    window.open(this.environment.getBatchUrl(), "_blank");
  }

}
