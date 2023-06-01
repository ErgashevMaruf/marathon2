import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { VideoComponent } from '../home/video/video.component';
@Component({
  selector: 'app-videoGallery',
  templateUrl: './videoGallery.component.html',
  styleUrls: ['./videoGallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

    videos = [
        ['1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',],
        ['7.jpg',
            '8.jpg',
            '9.jpg',
            '10.jpg',
            '11.jpg',
            '12.jpg',]
    ]
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(VideoComponent, {
        width:'100%'
    });
  }

  ngOnInit() {

  }
}
