import { Component, OnInit } from '@angular/core';
import { AnnounceService,announce } from './announce.service';
import {timer} from 'rxjs'
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

    announcement: announce[];

  constructor(private announce: AnnounceService) { }

  ngOnInit() {
    this.announce.getCategories().subscribe(res => {
        this.announcement = res;
        console.log(this.announcement);

      })
  }

}
