import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    BehaviorSubject,
    filter,
    map,
    Observable,
    of,
    switchMap,
    take,
    tap,
    throwError,
} from 'rxjs';
import { user } from './user.type';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private _httpClient: HttpClient) {}
    private _alluser: BehaviorSubject<user[] | null> = new BehaviorSubject(null);
    private _user: BehaviorSubject<user | null> = new BehaviorSubject(null);

    get alluser$(): Observable<user[]> {
        return this._alluser.asObservable();
    }


    get user$(): Observable<user> {
        return this._user.asObservable();
    }

    getAllUser(): Observable<user[]> {
        return this._httpClient.get<user[]>('api/user/user').pipe(
            tap((response: any) => {
                this._alluser.next(response);
            })
        );
    }



    deleteuser(id: number): Observable<boolean>
    {
        return this.alluser$.pipe(
            take(1),
            switchMap(user => this._httpClient.delete('api/user/deleteuser', {params: {id}}).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted user
                    const index = user.findIndex(item => item.id === id);

                    // Delete the user
                    user.splice(index, 1);

                    // Update the user
                    this._alluser.next(user);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }
     updateUser(id: number, user: user): Observable<user>
    {
        return this.alluser$.pipe(
            take(1),
            switchMap(users => this._httpClient.patch<user>('api/user/userupdate', {
                id,
                user

            }).pipe(

                map((updateduser) => {

                    // Find the index of the updated product
                    const index = users.findIndex(item => item.id === id);

                    // Update the product
                    users[index] = updateduser;

                    // Update the products
                    this._alluser.next(users);

                    // Return the updated product
                    return updateduser;
                }),
                switchMap(updateduser => this.user$.pipe(
                    take(1),
                    filter(item => item && item.id === id),
                    tap(() => {

                        // Update the product if it's selected
                        this._user.next(updateduser);

                        // Return the updated product
                        return updateduser;
                    })
                ))
            ))
        );
    }


}
