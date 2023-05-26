import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Events } from 'app/modules/services/events/event.type';
import { EventsService } from 'app/modules/services/events/events.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
@Component({
    selector: 'app-carusel',
    templateUrl: './carusel.component.html',
    styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
    @ViewChild('scroll') scroll;
    @Input() numVisible = 4;
    @Input() bg ='white'
    events: Events[];
    pressed = false;
    startX = 0;
    responsiveOptions: any[];

    constructor(private eventService: EventsService, private router: Router, private auth: AuthService) { }

    ngOnInit() {
        console.log(this.scroll);

        this.eventService.getEvent().subscribe(res => {
            this.events = res;
            console.log(res);

        })

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    onclickJoin(event:any)
{

    if(this.auth._authenticated)
    {
        this.router.navigateByUrl('/events/list')
    }
    else{
        this.router.navigateByUrl('/sign-in');
    }

}
mousedown(event)
{
    this.pressed = true;
   this.startX = event.clientX;
    event.currentTarget.style.cursor = 'grabbing'

}
mouseleave(event)
{
    this.pressed = false;
}
mouseup(event)
{
    this.pressed = false;
    event.currentTarget.style.cursor = 'grab'
}
mousemove(event)
{
    if(!this.pressed) return

    event.target.scrollLeft+=this.startX-event.clientX;

}
}
