import { Component } from '@angular/core';
import { EnvironmentConfigService } from './services/environment-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private config: any = {};

  constructor(environmentConfigService: EnvironmentConfigService) {
    this.config = environmentConfigService.getConfig();
  }
}
