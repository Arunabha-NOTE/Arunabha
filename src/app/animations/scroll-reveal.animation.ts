// src/app/animations/scroll-reveal.animations.ts
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

// --- SLIDE FROM BOTTOM ON SCROLL (for the main skills section) ---
export const slideInFromBottomOnScroll = trigger('slideInFromBottomOnScroll', [
    state('void', style({ // Initial hidden state
        transform: 'translateY(100%)',
        opacity: 0,
        visibility: 'hidden'
    })),
    state('in', style({ // Final visible state
        transform: 'translateY(0%)',
        opacity: 1,
        visibility: 'visible'
    })),
    transition('void => in', [
        style({ visibility: 'visible' }), // Make visible just before animating to prevent FOUC
        animate('2000ms 2000ms ease-out')
    ])
]);

// --- SLIDE FROM LEFT TO RIGHT ON SCROLL (for titles and kbd elements with stagger) ---
export const listSlideInFromLeftOnScrollStagger = trigger('listSlideInFromLeftOnScrollStagger', [
    // These states are for the container div that has the trigger
    state('void', style({
        opacity: 0,
        visibility: 'hidden'
    })),
    state('in', style({ // This is the target state for the container itself
        opacity: 1,
        visibility: 'visible'
    })),

    transition('void => in', [
        // Step 1: Explicitly animate the container to its 'in' state immediately (0s duration).
        // This makes sure the parent is fully visible and stable before child animations start.
        animate('0s', style({ opacity: 1, visibility: 'visible' })),

        // Step 2: Query and stagger the kbd children from their initial hidden state
        query(':scope kbd', stagger('250ms', [
            style({ // Initial state for each kbd element before its individual animation
                opacity: 0,
                transform: 'translateX(-50px)',
                visibility: 'hidden'
            }),
            animate('1000ms ease-out', style({ // Final state for each kbd element after its individual animation
                opacity: 1,
                transform: 'translateX(0px)',
                visibility: 'visible'
            }))
        ]), { optional: true })
    ])
]);


// --- Generic SLIDE FROM LEFT TO RIGHT ON SCROLL (if used elsewhere in your app) ---
export const slideInFromLeftOnScroll = trigger('slideInFromLeftOnScroll', [
    state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0,
        visibility: 'hidden'
    })),
    state('in', style({
        transform: 'translateX(0%)',
        opacity: 1,
        visibility: 'visible'
    })),
    transition('void => in', [
        style({ visibility: 'visible' }),
        animate('700ms 2000ms ease-out')
    ])
]);

// --- Generic SLIDE FROM BOTTOM ON SCROLL for staggered lists (if used elsewhere) ---
export const listSlideInFromBottomOnScrollStagger = trigger('listSlideInFromBottomOnScrollStagger', [
    transition('* => in', [
        query(':scope > *', style({ opacity: 0, transform: 'translateY(50px)', visibility: 'hidden' }), { optional: true }),
        query(':scope > *', stagger('150ms', [
            animate('700ms 2000ms ease-out', style({ opacity: 1, transform: 'translateY(0px)', visibility: 'visible' }))
        ]), { optional: true })
    ])
]);
