import { Component } from '@angular/core';
import { UpdateService } from './update/update-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'piumenere-web';

  constructor(
    public updateService: UpdateService
  ) {
  }

}
