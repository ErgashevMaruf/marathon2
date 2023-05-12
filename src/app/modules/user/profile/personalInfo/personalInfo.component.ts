import { Component, OnInit } from '@angular/core';
interface sendOption {
    name: string,
    value: string
  }
@Component({
  selector: 'app-personalInfo',
  templateUrl: './personalInfo.component.html',
  styleUrls: ['./personalInfo.component.css']
})
export class PersonalInfoComponent implements OnInit {
    sendOption: sendOption[];
    selectOption: sendOption
    date: Date;
    value:string;
    checkValue:string;
  constructor() { }

  ngOnInit() {
    this.sendOption = [
        { name: 'Ayol', value: 'Ayol' },
        { name: 'Erkak', value: 'Erkak' },
      ];
  }

}
