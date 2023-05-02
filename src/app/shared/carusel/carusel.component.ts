import { Component, OnInit } from '@angular/core';
import { Events } from 'app/modules/services/events/event.type';
import { EventsService } from 'app/modules/services/events/events.service';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {

    events: Events[];

    responsiveOptions: any[];

    constructor(private eventService: EventsService) {}

    ngOnInit() {
        this.eventService.getCategories().subscribe(res=>{
            this.events =res;
        })

       this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }

}
