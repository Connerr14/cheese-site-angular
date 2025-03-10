import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Import the cheese service and provide http client
import { CheeseService } from './services/cheese.service';

import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// Add the project providers
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    CheeseService, provideHttpClient()
  ]
};
