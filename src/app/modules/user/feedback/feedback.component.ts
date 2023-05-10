import { Component, OnInit } from '@angular/core';

interface sendOption{
    name:string,
    value:string
}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    sendOption:sendOption[];
    selectOption:sendOption
  constructor() { }

  ngOnInit() {
    this.sendOption = [
        { name: 'Telegram', value: 'NY' },
        { name: 'Sms', value: 'RM' },
    ];
  }

}
