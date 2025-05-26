import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public readonly loading$: Observable<boolean> = this._loading.asObservable();

    constructor() {
    }

    show() {
        this._loading.next(true);
    }

    hide() {
        this._loading.next(false);
    }
}
