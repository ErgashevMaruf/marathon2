import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
interface City {
    name: string;
    code: string;
}
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls  : ['./home.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements OnInit
{
    /**
     * Constructor
     */
    constructor()
    {
    }
    ngOnInit(): void {
    }

}
