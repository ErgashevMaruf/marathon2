import { Component, OnInit,ViewChild } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts/public_api';
type ChartOptions = {
    series: any;
    chart: any;
    labels: string[];
    plotOptions: any;
    colors: any[],
    fill: any[]
}
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  ngOnInit() {
  }
  @ViewChild("chart") chart;
  chartOptions: ApexOptions = {};

  constructor() {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 350,
        type: "radialBar",
      },

      plotOptions: {
        radialBar: {
            dataLabels:{
                name:{
                    show:true,
                    fontSize:'20px',
                    fontWeight:'bold',
                    offsetY:10
                },
                value:{
                    show:false
                }
            },
          hollow: {
            size: "50%",
          },
          track:{
            background:'#EFECEC'
          }
        },
      },

      colors: ["#09CC72"],
      dataLabels:{
        enabled:false,
        style:{
            fontSize:'50px',
            fontWeight:'bold'
        }

      },
      labels:['Yanvar']
    };
  }
}
