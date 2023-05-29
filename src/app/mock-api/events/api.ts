import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { allEvents } from 'app/mock-api/events/data';

@Injectable({
    providedIn: 'root'
})

export class EventsMockApi {
    private _allevents: any[] = allEvents;
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
            .onGet('api/events/allEvents')
            .reply(() => {

                // Clone the categories
                const categories = cloneDeep(this._allevents);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, categories];
            });
            this._fuseMockApiService
            .onGet('api/events/allEvents/events')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the courses and steps
                const events = cloneDeep(this._allevents);

                // Find the course and attach steps to it
                const event = events.find(item => item.id === id);

                return [
                    200,
                    event
                ];
            });
    }
}
