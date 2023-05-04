import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'app/modules/services/score/score.service';
import { Score } from 'app/modules/services/score/score.type';
import { Table } from 'primeng/table';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'lodash';
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

    cols:any[];

    statuses: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];
    month:any=[];
    constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.getAllScore().subscribe(res=>{
        this.scores =res;
        this.loading = false;
                    this.scores.forEach((customer) => (customer.date = new Date(customer.date)));
                   var year = this.scores[0].date.getFullYear();
                   console.log(String(year).toLocaleLowerCase());
            

    });

  }

}
