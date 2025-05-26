import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {routes} from './app.routes';
import {LoadingService} from "./services/loading.service";
import {LoadingInterceptor} from "./utils/loading.interceptor";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimations(),   // Add this line to enable Angular animations
        provideHttpClient(), // Enable HttpClient and allow interceptors
        LoadingService
    ]
};
