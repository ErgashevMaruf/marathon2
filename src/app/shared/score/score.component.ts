import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'app/modules/services/score/score.service';
import { Score } from 'app/modules/services/score/score.type';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

    score: Score[];

    statuses: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.getAllScore().subscribe(res=>{
        this.score =res;
        this.loading = false;

            this.score.forEach((customer) => (customer.date = new Date(customer.date)));
    });
    // clear(table: Table) {
    //     table.clear();
    // }

    // getSeverity(status) {
    //     switch (status) {
    //         case 'unqualified':
    //             return 'danger';

    //         case 'qualified':
    //             return 'success';

    //         case 'new':
    //             return 'info';

    //         case 'negotiation':
    //             return 'warning';

    //         case 'renewal':
    //             return null;
    //     }
    // }
  }

}
