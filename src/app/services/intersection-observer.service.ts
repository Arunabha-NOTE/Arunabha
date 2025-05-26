import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IntersectionObserverEntryExtended extends IntersectionObserverEntry {
    target: HTMLElement;
}

@Injectable({
    providedIn: 'root'
})
export class IntersectionObserverService {
    private observers = new Map<HTMLElement, IntersectionObserver>();

    constructor(private ngZone: NgZone) { }

    observe(element: HTMLElement, options?: IntersectionObserverInit): Observable<IntersectionObserverEntryExtended> {
        const subject = new Subject<IntersectionObserverEntryExtended>();

        this.ngZone.runOutsideAngular(() => {
            const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
                entries.forEach(entry => {
                    this.ngZone.run(() => { // Run back inside Angular zone for state update
                        subject.next(entry as IntersectionObserverEntryExtended);
                    });
                });
            }, options);

            observer.observe(element);
            this.observers.set(element, observer);
        });

        return subject.asObservable();
    }

    unobserve(element: HTMLElement): void {
        const observer = this.observers.get(element);
        if (observer) {
            observer.unobserve(element);
            observer.disconnect();
            this.observers.delete(element);
        }
    }

    disconnectAll(): void {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}
