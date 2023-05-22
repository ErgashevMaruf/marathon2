import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { clubs} from 'app/mock-api/clubs/data';

@Injectable({
    providedIn: 'root'
})
export class ClubsMockApi
{
    private _clubs: any[] = clubs;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ announces - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/clubs/clubs')
            .reply(() => {
                const club = cloneDeep(this._clubs);


                return [200, club];
            });

    }
}
