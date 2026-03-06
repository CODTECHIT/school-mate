import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private demoModalSource = new BehaviorSubject<boolean>(false);
    demoModal$ = this.demoModalSource.asObservable();

    private appModalSource = new BehaviorSubject<boolean>(false);
    appModal$ = this.appModalSource.asObservable();

    openDemoModal() {
        this.demoModalSource.next(true);
        document.body.style.overflow = 'hidden';
    }

    closeDemoModal() {
        this.demoModalSource.next(false);
        document.body.style.overflow = 'auto';
    }

    openAppModal() {
        this.appModalSource.next(true);
        document.body.style.overflow = 'hidden';
    }

    closeAppModal() {
        this.appModalSource.next(false);
        document.body.style.overflow = 'auto';
    }
}
