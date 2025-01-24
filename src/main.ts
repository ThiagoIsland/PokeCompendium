import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  

export const appConfig = { 
  providers: [
    provideRouter(routes) 
  ]
};

bootstrapApplication(AppComponent, appConfig) 
  .catch((err) => console.error(err));