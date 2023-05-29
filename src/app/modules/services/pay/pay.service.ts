import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,tap,} from 'rxjs';
import { pay } from './pay.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayService {

constructor(private _httpClient: HttpClient) { }
private _pay: BehaviorSubject<pay[] | null> = new BehaviorSubject(null);

getMessage(): Observable<pay[]>
{
    return this._httpClient.get<pay[]>('api/pay/pay').pipe(
        tap((response: any) => {
            this._pay.next(response);
        })
    );
}

}










