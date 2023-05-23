import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'app/modules/services/gallery.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private gallery: GalleryService) { }

    ngOnInit() {
        this.gallery.getCategories().subscribe(res => {
            this.images = res;
            console.log(res);

        })
    }

}
