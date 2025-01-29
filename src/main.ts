import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core'; // 🔥 Corrige erro "importProvidersFrom" não encontrado
import { HttpClientModule } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) // 🔥 Adiciona corretamente o HttpClientModule
  ]
};

// 🔥 Corrige a chamada passando apenas dois argumentos
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));