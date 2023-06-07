import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/modules/services/user/user.service';
import { user } from 'app/modules/services/user/user.type';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

    userInfo:user[];

    totalRecords: number;

    loading: boolean = true;

    constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.loading = false;
    this.userService.getAllUser().subscribe(res=>{
        this.userInfo=res;
        console.log(res);
    })
  }
  clear(table: Table) {
    table.clear();
}
}
