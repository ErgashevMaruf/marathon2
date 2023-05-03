import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { score } from 'app/mock-api/score/data';

@Injectable({
    providedIn: 'root'
})

export class ScoreMockApi
{
    private _score: any[] = score;
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
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/score/score')
            .reply(() => {

                // Clone the categories
                const score = cloneDeep(this._score);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, score];
            });
    }
}
