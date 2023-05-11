import { Injectable } from "@angular/core";

import { cloneDeep } from "lodash-es";

import { FuseMockApiService } from "@fuse/lib/mock-api";

import { message } from "./data";

@Injectable({
    providedIn:'root'
})

export class MessageMockApi{
    private _message: any[] = message;

    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        this.registerHandlers();
    }

    registerHandlers():void
    {
        this._fuseMockApiService
            .onGet('api/message/message')
            .reply(() => {

                // Clone the categories
                const categories = cloneDeep(this._message);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, message];
            });

    }
}
