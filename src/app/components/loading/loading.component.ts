import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, timer } from 'rxjs'; // Import timer
import { finalize, switchMap } from 'rxjs/operators'; // Import switchMap
import { LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-loading',
  standalone: true,
    imports: [
        CommonModule,
    ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements HttpInterceptor {
    constructor(protected loadingService: LoadingService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.loadingService.show(); // Show loading immediately

        // Add an artificial delay before sending the request
        // and ensuring the loading indicator stays for at least 1 second
        return timer(1000).pipe( // Delay for 1000 milliseconds (1 second)
            switchMap(() => next.handle(request)), // After delay, continue with the actual HTTP request
            finalize(() => {
                this.loadingService.hide(); // Hide loading when request completes
            })
        );
    }
}
