import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {slideInFromBottomInitial} from "../../animations/initial-load.animation";

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',animations: [
        slideInFromBottomInitial // Register the animation trigger
    ]

})
export class HeroComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
