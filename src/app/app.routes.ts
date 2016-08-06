import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent, environment, SeekerComponent, EmployerComponent} from './';

const routes: RouterConfig = [
  { path: 'jobseeker', component: SeekerComponent },
  { path: 'employer', component: EmployerComponent },
  { path: '**', component: SeekerComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];