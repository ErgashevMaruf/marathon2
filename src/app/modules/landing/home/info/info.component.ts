import { Component, OnInit } from '@angular/core';
import { InfoService } from 'app/modules/services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    eventInfo:any;
  constructor(private _info:InfoService) { }

  ngOnInit() {
    this._info.getInfo().subscribe(res=>{
        this.eventInfo = res;
    })
  }
}
