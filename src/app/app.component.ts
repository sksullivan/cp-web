import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
 moduleId: module.id,
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.css'],
 viewProviders: [HTTP_PROVIDERS],
 directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title="yiks"
}

