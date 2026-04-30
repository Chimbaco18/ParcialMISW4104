import {ApplicationConfig,provideBrowserGlobalErrorListeners,importProvidersFrom} from '@angular/core'; // Añadido importProvidersFrom
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { UserModule } from './user/users.module'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(UserModule),
  ],
};
