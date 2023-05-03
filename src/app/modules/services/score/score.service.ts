import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable,tap,} from 'rxjs';
import { Score } from './score.type';
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

private _score : BehaviorSubject<Score[] | null> = new BehaviorSubject(null);

constructor(private _httpClient: HttpClient) { }

getAllScore():Observable<Score[]>{
    return this._httpClient.get<Score[]>('api/score/score').pipe(
        tap((response: any) => {
            this._score.next(response);
        })
    );}
}
