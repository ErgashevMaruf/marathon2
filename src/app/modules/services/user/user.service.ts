import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable,tap,} from 'rxjs';
import { user } from './user.type';
@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private _httpClient: HttpClient) { }
    private _alluser: BehaviorSubject<user[]> = new BehaviorSubject(null);

    getAllUser():Observable<user[]>{
        return this._httpClient.get<user[]>('api/user/user').pipe(
            tap((response: any) => {
                this._alluser.next(response);
            })
        );}
}
