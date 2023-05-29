import { Injectable } from "@angular/core";

import { cloneDeep } from "lodash-es";

import { FuseMockApiService } from "@fuse/lib/mock-api";

import { pay } from "./data";

@Injectable({
    providedIn:'root'
})

export class payMockApi{
    private _pay: any[] = pay;

    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        this.registerHandlers();
    }

    registerHandlers():void
    {
        this._fuseMockApiService
            .onGet('api/pay/pay')
            .reply(() => {

                // Clone the categories
                const payment = cloneDeep(this._pay);

                // Sort the categories alphabetically by title
                // categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, payment];
            });

    }
}
