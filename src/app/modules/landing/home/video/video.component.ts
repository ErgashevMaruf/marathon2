import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent implements OnInit {


    @ViewChild("element1")
    element1!:ElementRef;

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
  allvideoTime()
  {
    const duration = document.querySelector('.duration')
    let videoDuration = this.video.nativeElement.duration;
    let totalMin = Math.floor(videoDuration/60);
    let totalSec:any = Math.floor(videoDuration%60);

    totalSec<10 ? totalSec = "0"+ totalSec : totalSec
    duration.innerHTML = `${totalMin}:${totalSec}`
  }
  timeupdate()
  {
    const progress_Bar = (document.querySelector(".progress-bar") as HTMLElement)
    const current = document.querySelector('.current')
    let videoDuration = this.video.nativeElement.duration;
    let currenttime = this.video.nativeElement.currentTime;
    let totalMin = Math.floor(currenttime/60);
    let totalSec:any = Math.floor(currenttime%60);
    totalSec<10 ? totalSec = "0"+ totalSec : totalSec
    current.innerHTML = `${totalMin}:${totalSec}`;
    let barWidth = (currenttime/videoDuration)*100;
    progress_Bar.style.width = `${barWidth}%`
  }
  changeArea(e:any)
  {
   const progressArea = document.querySelector(".progress-area");
    let videoDuration = this.video.nativeElement.duration;
    let progressWidthval = progressArea.clientWidth;
    let ClickOffSetX = e.offsetX;

    this.video.nativeElement.currentTime = (ClickOffSetX/progressWidthval)*videoDuration;

  }
  volume(value:number, ref:HTMLInputElement)
  {
    let volume = document.querySelector(".volume");

    const volumeValue = Number(ref.value);
    this.video.nativeElement.volume = volumeValue/100;
    if(volumeValue==0)
    {
        volume.innerHTML = "volume_off";
    }
    else if(volumeValue<40)
    {
        volume.innerHTML = "volume_down"
    }
    else{
        volume.innerHTML = "volume_up"
    }
  }
  mute()
  {
    let volume = document.querySelector(".volume");
    if(this.element1.nativeElement.value==0)
    {
        this.element1.nativeElement.value = 80;
        this.video.nativeElement.volume = 0.8;
        volume.innerHTML = "volume_up"
    }
    else{
        this.element1.nativeElement.value = 0;
        this.video.nativeElement.volume = 0
        volume.innerHTML = "volume_off";
    }
  }
  showTime(e:any)
  {
   const progressArea = (document.querySelector(".progress-area") as HTMLElement);
 const  progressAreaTime = (document.querySelector(".progressAreaTime") as HTMLElement);

    let progressWidthval = progressArea.clientWidth;
    let x = e.offsetX;
    progressAreaTime.style.setProperty('--x',`${x}px`)
    progressAreaTime.style.display = 'block';
    let videoDuration = this.video.nativeElement.duration;
    let progressTime = Math.floor((x/progressWidthval)*videoDuration);
    let totalMin = Math.floor(progressTime/60);
    let totalSec:any = Math.floor(progressTime%60);
    totalSec<10 ? totalSec = "0"+ totalSec : totalSec
    progressAreaTime.innerHTML = `${totalMin}:${totalSec}`
  }
  hideTime()
  {
 const  progressAreaTime = (document.querySelector(".progressAreaTime") as HTMLElement);
    progressAreaTime.style.display = 'none';
  }
  toggleScreen()
  {
        const fullscreen = document.querySelector(".fullscreen")
        const video_player = (document.querySelector(".video_player") as HTMLElement);

    if(!video_player.classList.contains("openFullScreen"))
    {
       video_player.classList.add("openFullScreen");
        fullscreen.innerHTML = "fullscreen_exit";
        video_player.requestFullscreen();
    }
    else{
        video_player.classList.remove("openFullScreen");
        fullscreen.innerHTML = "fullscreen";
       document.exitFullscreen();
    }
  }
  openSetting()
  {
    const settings = document.querySelector(".settings")
    const settingsBtn = document.querySelector(".settingsBtn")
    settings.classList.toggle('active');
    settingsBtn.classList.toggle('active');
  }
  videoSpeed($event)
  {
   const playback = document.querySelectorAll(".playback li");
   playback.forEach(e=>{
    e.classList.remove('active');
   })
   $event.target.classList.add('active');
   let speed = $event.target.getAttribute('data-speed');
   this.video.nativeElement.playbackRate = speed;
  }
}
