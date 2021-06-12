import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentConfigService {
  private appConfig: any = {};

  constructor(private httpClient: HttpClient) {}

  loadAppConfig() {
    return this.httpClient
      .get('/assets/appConfig.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
