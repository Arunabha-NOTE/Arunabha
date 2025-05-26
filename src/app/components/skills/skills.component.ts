import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {CommonModule} from "@angular/common";
import {slideInFromBottomOnScroll, listSlideInFromLeftOnScrollStagger} from '../../animations/scroll-reveal.animation';


@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css',
    animations: [
        slideInFromBottomOnScroll,
        listSlideInFromLeftOnScrollStagger
    ]
})
export class SkillsComponent implements OnInit, OnDestroy {
    animationState: 'void' | 'in' = 'void';
    skillsListState: 'void' | 'in' = 'void';
    kbdsOpacityControlled: boolean = false;

    private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        const options = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.01 // Trigger when 10% of the element is visible
        };

        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('SkillsComponent: Element intersected! Triggering animations.');

                        this.animationState = 'in'; // Trigger main container animation

                    // Delay the inner list animation
                    setTimeout(() => {
                        this.skillsListState = 'in';

                        // Add another timeout to enable kbd opacity AFTER the list animation has had time to complete
                        // This should be long enough for all staggered animations to finish
                        setTimeout(() => {
                            this.kbdsOpacityControlled = true;
                            console.log('Skills: Setting kbd opacity to visible');
                        }, 1500); // Wait additional time after the list animation starts

                    }, 700); // This delay might need adjustment

                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, options);

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

}
