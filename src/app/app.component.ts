import {Component, AfterViewInit, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProgressBarComponent} from "./components/progress-bar/progress-bar.component";
import Lenis from 'lenis';
import {LoadingComponent} from "./components/loading/loading.component";
import {LoadingService} from "./services/loading.service";
import { timer } from 'rxjs'; // Import timer for artificial delay
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent, ProgressBarComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    private lenis: Lenis | undefined;

    constructor(private loadingService: LoadingService, private renderer: Renderer2) {
        // 1. Show the loader immediately when AppComponent is constructed
        this.loadingService.show();
    }

    ngOnInit(): void {
        // You might fetch some initial data here if needed for the page
        // Add preload class to body
        this.renderer.addClass(document.body, 'preload');

        // Remove it after a short delay when app is loaded
        setTimeout(() => {
          this.renderer.removeClass(document.body, 'preload');
        }, 300);
    }



    ngAfterViewInit(): void {
        this.lenis = new Lenis();

        const raf = (time: number) => {
            // @ts-ignore
            this.lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        timer(1000).pipe( // Delay for 1 second
            take(1) // Only take one emission from the timer
        ).subscribe(() => {
            this.loadingService.hide(); // Hide the loader after the delay
        });
    }

    ngOnDestroy(): void {
        if (this.lenis) {
            this.lenis.destroy();
        }
    }
  title = 'Arunabha Mukhopadhyay';
}
