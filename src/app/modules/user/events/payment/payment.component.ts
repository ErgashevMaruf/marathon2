import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'app/modules/services/events/events.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  event: any;
  courseId: any
  constructor(private eventServce: EventsService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id')
    this.eventServce.getEvent().subscribe(res => {
      this.event = res.find((el) => el.id == this.courseId)
    })
  }
}
