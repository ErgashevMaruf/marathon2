import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import {  defaultNavigation,admin} from 'app/mock-api/common/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class NavigationMockApi
{
    private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;
    private readonly _admin: FuseNavigationItem[] = admin;
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
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/common/navigation/user')
            .reply(() => {
                // Fill compact navigation children using the default navigation
                // Return the response
                return [
                    200,
                    {
                        default   : cloneDeep(this._defaultNavigation),
                    }
                ];
            });
            this._fuseMockApiService
            .onGet('api/common/navigation/admin')
            .reply(() => {
                // Fill compact navigation children using the default navigation
                // Return the response
                return [
                    200,
                    {
                        default   : cloneDeep(this._admin),
                    }
                ];
            });
    }
}
