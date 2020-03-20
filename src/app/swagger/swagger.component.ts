import { Component, AfterViewInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { Environment } from 'src/environments/environment';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: [
    './swagger.component.scss'
  ]
})
export class SwaggerComponent implements AfterViewInit {

  constructor(private environment: Environment){
  }

  ngAfterViewInit(): void {
    SwaggerUI({
      url: this.environment.getOpenApiUrl(),
      dom_id: '#swaggerContainer'
    });
  }

}
