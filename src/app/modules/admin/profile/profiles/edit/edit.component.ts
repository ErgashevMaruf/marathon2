import { ChangeDetectorRef, } from '@angular/core';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'app/modules/services/user/user.service';
import { user } from 'app/modules/services/user/user.type';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    flashMessage: 'success' | 'error' | null = null;
    value: string;
    user:any
 constructor(@Inject(MAT_DIALOG_DATA) public data: {user:user},
 private _changeDetectorRef: ChangeDetectorRef,
 private dialogref: MatDialogRef<EditComponent>,
 private userService: UserService,
 )
    {
        this.user =data
    }
  ngOnInit() {

  }
  closeDialog()
  {
    this.dialogref.close();

  }
  updateuser(user): void
  {
    console.log(user.id);

      this.userService.updateUser(user.id, user).subscribe(() => {

          // Show a success message
          this.showFlashMessage('success');
      });
  }
  showFlashMessage(type: 'success' | 'error'): void
  {
      // Show the message
      this.flashMessage = type;

      // Mark for check
      this._changeDetectorRef.markForCheck();

      // Hide it after 3 seconds
      setTimeout(() => {

          this.flashMessage = null;

          // Mark for check
          this._changeDetectorRef.markForCheck();
      }, 3000);
  }
}
