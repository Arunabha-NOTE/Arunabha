import {Component, AfterViewInit, OnDestroy} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProgressBarComponent} from "./components/progress-bar/progress-bar.component";
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
    private lenis: Lenis | undefined;

    ngAfterViewInit(): void {
        this.lenis = new Lenis();

        const raf = (time: number) => {
            // @ts-ignore
            this.lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }

    ngOnDestroy(): void {
        if (this.lenis) {
            this.lenis.destroy();
        }
    }
  title = 'Arunabha Mukhopadhyay';
}
