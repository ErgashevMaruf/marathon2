import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'app/modules/services/events/events.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    course:any;
    courseId:any;
  constructor(private activatedRoute: ActivatedRoute, private eventServce: EventsService) { }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id')
    this.eventServce.getEvent().subscribe(res=>{
        this.course = res.find((el)=>el.id==this.courseId)
        console.log(this.course);
    })
  }

}
