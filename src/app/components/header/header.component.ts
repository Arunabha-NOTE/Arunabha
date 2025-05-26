import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {slideInFromBottomInitial} from "../../animations/initial-load.animation";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    animations: [
        slideInFromBottomInitial // Register the animation trigger
    ]
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {

    }
    ScrollIntoView(elem: string) {
        document.querySelector(elem)!.scrollIntoView({behavior: 'smooth', block: 'start'});
    }


}
