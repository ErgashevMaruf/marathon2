import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/modules/services/events/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myEvents',
  templateUrl: './myEvents.component.html',
  styleUrls: ['./myEvents.component.css']
})
export class MyEventsComponent implements OnInit {
    allevents: any[];
    year: any;
  constructor(private events: EventsService, private router:Router) { }

  ngOnInit() {
    this.events.getEvent().subscribe((res)=>{
        this.allevents = res;
        console.log(this.allevents);
        this.year = new Date().getFullYear();
    })
  }
  event(id:string)
  {
    this.router.navigateByUrl(`/events/${id}`)
  }
}
