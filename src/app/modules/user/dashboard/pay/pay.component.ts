import { Component, OnInit } from '@angular/core';
import { PayService } from 'app/modules/services/pay/pay.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
    sum:number;
    tableData:any
  constructor(private pay: PayService) { }

  ngOnInit() {
    this.pay.getMessage().subscribe(res=>{
        this.tableData = res;
        this.calculateSum();
    })
  }
  calculateSum()
  {

    let total = 0;
    for(let x of this.tableData)
    {
        total+=x.sum;
    }
    this.sum = total;
  }

}

