import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, } from 'rxjs';
import { Events } from './event.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class EventsService {


    private _events: BehaviorSubject<Events[] | null> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) { }

    get events$(): Observable<Events[]> {
        return this._events.asObservable();
    }
    getCategories(): Observable<Events[]> {
        return this._httpClient.get<Events[]>('api/events/allEvents').pipe(
            tap((response: any) => {
                this._events.next(response);
            })
        );
    }

}
