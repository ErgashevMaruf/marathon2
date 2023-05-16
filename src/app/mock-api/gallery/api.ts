import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { gallery } from 'app/mock-api/gallery/data';

@Injectable({
    providedIn: 'root'
})

export class galleryMockApi {
    private _imgs: any[] = gallery;
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
            .onGet('api/gallery/gallery')
            .reply(() => {

                // Clone the categories
                const imgs = cloneDeep(this._imgs);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, imgs];
            });
    }
}
