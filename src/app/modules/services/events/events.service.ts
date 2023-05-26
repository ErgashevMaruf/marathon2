import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Events } from './event.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class EventsService {


    private _allevents: BehaviorSubject<Events[] | null> = new BehaviorSubject(null);
    private _event: BehaviorSubject<Events | null> = new BehaviorSubject(null);
    constructor(private _httpClient: HttpClient) { }

    getEvent(): Observable<Events[]> {
        return this._httpClient.get<Events[]>('api/events/allEvents').pipe(
            tap((response: any) => {
                this._allevents.next(response);
            })
        );
    }
    getEventById(id: string): Observable<Events>
    {
        return this._httpClient.get<Events>('api/events/allEvents/events', {params: {id}}).pipe(
            map((events) => {

                // Update the course
                this._event.next(events);

                // Return the course
                return events;
            }),
            switchMap((events) => {

                if ( !events)
                {
                    return throwError('Could not found course with id of ' + id + '!');
                }

                return of(events);
            })
        );
    }

}
