import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
 moduleId: module.id,
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.css'],
 viewProviders: [HTTP_PROVIDERS]
})
export class AppComponent {
 constructor(http: Http) {
   var people;
   http.get('/api/users/9879')
   .toPromise().then(function(yik){console.log(yik)},function(yak){console.log(yak)});
 }
}

