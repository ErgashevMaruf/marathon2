import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'app/modules/services/events/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  event: any;
  courseId: any;
  constructor(private activatedRoute: ActivatedRoute, private eventServce: EventsService,
    private router: Router) { }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id')
    this.eventServce.getEvent().subscribe(res => {
      this.event = res.find((el) => el.id == this.courseId)
    })
  }
  payment(event: any) {
    this.router.navigateByUrl(`/events/pay/${event}`)
  }


}
