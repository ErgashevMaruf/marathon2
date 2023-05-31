import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config';
import { Theme } from 'app/core/config/app.config';
import { Observable } from 'rxjs';
interface City {
    name: string;
    code: string;
}
interface SelectItem{
    label: string,
    valu:string
}
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls  : ['./home.style.css'],
    // encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements OnInit
{
    selectedItem='Gallery'
    listItems: any;
    username = new FormControl();
    /**
     * Constructor
     */
    constructor(private _fuseConfigService: FuseConfigService)
    {
    }
    ngOnInit(): void {
        console.log(this.selectedItem);
        this.listItems = [{label: 'customGallery', value: 'Gallery'}, {label: 'customVideo', value: 'Video'}];
    }
    setScheme(theme: Theme)
    {
        this._fuseConfigService.config = {theme}

    }
}
