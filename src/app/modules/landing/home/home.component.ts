import { Component, ViewEncapsulation,OnInit } from '@angular/core';
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
    cities: City[];

    selectedCity: City;
    constructor()
    {
    }
    ngOnInit(): void {
        this.cities = [
            { name: 'UZB', code: 'NY' },
            { name: 'RUS', code: 'RM' },
            { name: 'ENG', code: 'LDN' },
        ];
    }

}
