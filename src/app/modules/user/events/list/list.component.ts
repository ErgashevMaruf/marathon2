import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/modules/services/events/events.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private res: EventsService) { }

  ngOnInit() {
    this.res.getEventById('1009').subscribe(res=>{
        console.log(res);

    })
  }

}
