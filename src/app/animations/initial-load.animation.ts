import { trigger, state, style, animate, transition } from '@angular/animations';

// Animation for a single element sliding in from the bottom on initial page load
export const slideInFromBottomInitial = trigger('slideInFromBottomInitial', [
    state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
    })),
    transition(':enter', [ // Triggers when element is added to the DOM
        animate('700ms 2500ms ease-out', style({ // 700ms duration, 2000ms (2 second) delay, ease-out
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ])
]);
