import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/modules/services/user/user.service';
import { user } from 'app/modules/services/user/user.type';
import { Table } from 'primeng/table';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { EditComponent } from './edit/edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

    userInfo:user[];

    totalRecords: number;

    loading: boolean = true;

    constructor(private _userService: UserService,
        private _fuseConfirmationService:FuseConfirmationService,
        public dialog: MatDialog) {
   }

  ngOnInit() {
    this.loading = false;
    this._userService.getAllUser().subscribe(res=>{
        this.userInfo=res;
        this.userInfo.forEach(element=>{
            element.date = new Date(element.date)
        })
    })
  }
  clear(table: Table) {
    table.clear();
}
remove(element)
{
    const confirmation = this._fuseConfirmationService.open({
        title  : 'Delete product',
        message: 'Are you sure you want to remove this product? This action cannot be undone!',
        actions: {
            confirm: {
                label: 'Delete'
            }
        }
    });

    // Subscribe to the confirmation dialog closed action
    confirmation.afterClosed().subscribe((result) => {

        // If the confirm button pressed...
        if ( result === 'confirmed' )
        {
            this._userService.deleteuser(element.id).subscribe();
        }
    });
}
openDialog(user) {
    this.dialog.open(EditComponent, {
        data:user
    });
  }
}
