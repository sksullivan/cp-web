import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, SeekerComponent, EmployerComponent} from './app/';
//import { SeekerComponent } from './app/seeker/';
//import { EmployerComponent } from './app/employer/'
import { appRouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
  appRouterProviders
]);
