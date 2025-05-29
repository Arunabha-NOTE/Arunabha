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
    kbdsOpacityControlled: boolean = false; // KEEPING THIS AS PER YOUR INSTRUCTION

    private observer: IntersectionObserver | undefined;
    private mobileBreakpoint = 768; // Define your mobile breakpoint (e.g., for common tablets/phones)

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        // NEW: Check if on mobile device
        if (typeof window !== 'undefined' && window.innerWidth < this.mobileBreakpoint) {
            console.log('SkillsComponent: On mobile, disabling slide-in animations. Setting states immediately.');
            this.animationState = 'in'; // Set the main container state to 'in' immediately
            this.skillsListState = 'in'; // Set the kbd list state to 'in' immediately
            this.kbdsOpacityControlled = true; // Ensure opacity is also visible immediately on mobile
            return; // Exit ngOnInit, no observer needed for mobile
        }

        // If not on mobile, proceed with IntersectionObserver for scroll animation
        const options = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.01 // Trigger when 1% of the element is visible
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
                        }, 1300); // Wait additional time after the list animation starts

                    }, 300); // This delay might need adjustment

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
