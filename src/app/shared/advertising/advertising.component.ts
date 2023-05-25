import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css']
})
export class AdvertisingComponent implements OnInit {
    products =[1,2,3]
  constructor() { }
  @Input() imgWidth = '280px'
    @Input() imgHeight = '634px'
    @Input() verticalView = '650px'
    @Input() nike = 'nike.png'
  ngOnInit() {
  }

}
