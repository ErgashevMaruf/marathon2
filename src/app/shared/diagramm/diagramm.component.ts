import { Component, OnInit,ViewChild } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-diagramm',
  templateUrl: './diagramm.component.html',
  styleUrls: ['./diagramm.component.css']
})
export class DiagrammComponent {

    @ViewChild("chart") chart;
    public chartOptions: ApexOptions;

    constructor() {
      this.chartOptions = {
        series: [
          {
            name: "Name",
            data: [300,200,100, 55, 41, 67, 22, 43,12,13,17,18,15,16],
            color:'#02A3D3',
          },
          {
            name: "Name",
            data: [13, 23, 20, 8, 13, 27,12,15,16,102,11,13,100],
            color:'#C488FF'
          },
          {
            name: "Name",
            data: [11, 17, 15, 15, 21, 14,14,15,12,13,11,102,102,13],
            color:'#7AD9D9'
          },
          {
            name: "Name",
            data: [21, 7, 25, 13, 22, 8,102,11,12,13,14],
            color:'#84B4FF'

          },
        ],
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true
          },

        },
        dataLabels:{

        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {

          bar: {
            horizontal: false,
            columnWidth:'60%',
          },
        },
        xaxis: {
          type: "category",
          categories: [
            "Tash",
            "Qash",
            "Nam",
            "Ter",
            "Sir",
            "Bux",
            "Q.R",
            "Nav",
            "Sur",
            "Xor",
            "And",
            "Far",
            "Tosh.v",
            "Nam"

          ],
          range:10,
        },
        yaxis:{

        },

        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1

        },

      };
    }

}
