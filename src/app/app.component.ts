import { Component, ViewChild } from '@angular/core';
import { UpdateService } from './update/update-service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'piumenere-web';

  @ViewChild(MatDrawer, { static: false })
  private drawer: MatDrawer;

  constructor(
    public updateService: UpdateService
  ) {
  }

  public toggle(): void {
    console.log('TEST ' + this.drawer);
  }

}
