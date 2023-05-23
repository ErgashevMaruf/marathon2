import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,tap,} from 'rxjs';
import { message } from './message.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


private _events: BehaviorSubject<message[] | null> = new BehaviorSubject(null);

constructor(private _httpClient: HttpClient) { }

get message$(): Observable<message[]>
{
    return this._events.asObservable();
}
getMessage(): Observable<message[]>
{
    return this._httpClient.get<message[]>('api/message/message').pipe(
        tap((response: any) => {
            this._events.next(response);
        })
    );
}
}
