import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, } from 'rxjs';
import { clubs } from './club.type';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ClubService {


    private _events: BehaviorSubject<clubs[] | null> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) { }

    getClubs(): Observable<clubs[]> {
        return this._httpClient.get<clubs[]>('api/clubs/clubs').pipe(
            tap((response: any) => {
                this._events.next(response);
            })
        );
    }

}
