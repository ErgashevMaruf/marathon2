import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    formGroup: FormGroup;

    categories: any[] = [
        { name: 'Sound Effect', key: 'A' },
        { name: 'Custom Found', key: 'M' },
    ];
  sendOption: sendOption[];
  selectOption: sendOption
  constructor() { }

  ngOnInit() {

    this.sendOption = [
      { name: 'Telegram', value: 'NY' },
      { name: 'Sms', value: 'RM' },
    ];
    this.formGroup = new FormGroup({
        selectedCategory: new FormControl()
    });
  }

}
