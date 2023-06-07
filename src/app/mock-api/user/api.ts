import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { user } from 'app/mock-api/user/data';

@Injectable({
    providedIn: 'root'
})

export class UsersMockApi {
    private _user: any[] = user;
    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/user/user')
            .reply(() => {

                // Clone the categories
                const alluser = cloneDeep(this._user);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, alluser];
            });
            this._fuseMockApiService
            .onGet('api/user/userid')
            .reply(() => {

                // Clone the categories
                const alluser = cloneDeep(this._user);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, alluser];
            });
    }
}
