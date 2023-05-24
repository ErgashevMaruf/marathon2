import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/modules/services/events/events.service';
@Component({
  selector: 'app-eventsInfo',
  templateUrl: './eventsInfo.component.html',
  styleUrls: ['./eventsInfo.component.css']
})
export class EventsInfoComponent implements OnInit {

    allevents: any[];
year: any;
  constructor(private events: EventsService) { }

  ngOnInit() {
    this.events.getEvent().subscribe((res)=>{
        this.allevents = res;
        console.log(this.allevents);
        this.year = new Date().getFullYear();
    })
  }

}
