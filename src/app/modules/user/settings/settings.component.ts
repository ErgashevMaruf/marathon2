import { Component, OnInit } from '@angular/core';
interface sendOption {
  name: string;
  value: string
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  sendOption: sendOption[];
  selectOption: sendOption
  constructor() { }

  ngOnInit() {

    this.sendOption = [
      { name: 'Telegram', value: 'NY' },
      { name: 'Sms', value: 'RM' },
    ];
  }

}
