import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes'; // Importação das rotas
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importação do HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), // Fornece as rotas
    provideHttpClient() // Fornece o HttpClient
  ]
}).catch((err) => console.error(err));
