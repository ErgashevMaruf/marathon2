import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { infoData } from 'app/mock-api/info/data';

@Injectable({
    providedIn: 'root'
})

export class InfoMockApi {
    private _info: any = infoData;
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
            .onGet('api/info/infoData')
            .reply(() => {

                // Clone the categories
                const info = cloneDeep(this._info);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, info];
            });
    }
}
