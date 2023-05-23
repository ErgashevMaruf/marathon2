import { Component, OnInit } from '@angular/core';
import { message } from '../../../services/message/message.type';
import { LazyLoadEvent } from 'primeng/api';
import { MessageService } from 'app/modules/services/message/message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    cols:any[];
    tableData:message[] = [];
    loading: boolean = false;

  constructor(private userService: MessageService) { }

  ngOnInit() {
    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
    this.userService.getMessage().subscribe(res=>{
        this.tableData=res;
  })

    }
}
