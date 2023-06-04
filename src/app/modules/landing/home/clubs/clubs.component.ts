import { Component, OnInit } from '@angular/core';
import { ClubService } from 'app/modules/services/club/club.service';
import { clubs } from 'app/modules/services/club/club.type';
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs: clubs[];
  selectClub = 'All';
  constructor(private club: ClubService) { }

  ngOnInit() {
    this.club.getClubs().subscribe(res => {
      this.clubs = res;
      console.log(this.clubs);
    })
  }

}
