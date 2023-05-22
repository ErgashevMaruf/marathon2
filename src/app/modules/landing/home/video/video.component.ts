import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent implements OnInit {


  @ViewChild("video")
  video!: ElementRef;

  @ViewChild("pause")
  paused: ElementRef;


  constructor(private element: ElementRef) {

  }
  ngOnInit(): void {

  }
  toggle() {
    const play_pause = document.querySelector(".play_pause");
    if (play_pause.innerHTML == "play_arrow") {
      this.video.nativeElement.play();
      play_pause.innerHTML = "pause";
    }
    else {
      play_pause.innerHTML = "play_arrow"
      this.video.nativeElement.pause();
    }
  }
  forward() {
    this.video.nativeElement.currentTime += 10;
  }
  last() {
    this.video.nativeElement.currentTime -= 10;
  }
}
