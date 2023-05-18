import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'app/modules/services/score/score.service';
import { Score } from 'app/modules/services/score/score.type';
import { Table } from 'primeng/table';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, find } from 'lodash';
interface City {
    name: string;
    code: string;
}
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

    scores: Score[];
    city: any[];
    selectCity:any
    cols:any[];
    selectYear:any[];
    year: any[];
    selectOption: any[]
    loading: boolean = true;

    activityValues: number[] = [0, 100];
    month:any=[];
    constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.getAllScore().subscribe(res=>{
        this.scores =res;
        this.loading = false;
                    this.scores.forEach((customer) => (customer.date = new Date(customer.date)));
                    console.log(this.scores[1].date.getMonth());

    });
    this.year = [
        { label: 'Yanvar', value: '10' },
        { label: 'Fevral', value: '10' },
        { label: 'Mart', value: '10' },
        { label: 'Aprel', value: '10' },
        { label: 'May', value: '10' },
        { label: 'Iyun', value: '10' },
        { label: 'Iyul', value: '10' },
        { label: 'Avgust', value: '10' },
        { label: 'Sentabr', value: '10' },
        { label: 'Oktabr', value: '10' },
        { label: 'Noyabr', value: '10' },
        { label: 'Dekabr', value: '10' },
    ];
    this.city = [
        { label: 'Toshkent', value: '10' },
        { label: 'Samarqand', value: '10' },
        { label: 'Buxoro', value: '10' },
        { label: 'Qashqadaryo', value: '10' },
        { label: 'Namangan', value: '10' },
    ];
  }
  find(event:any)
  {
        console.log(event);

  }

}
