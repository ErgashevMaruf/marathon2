import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery/gallery.service';
@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.css']
})
export class OrganizersComponent implements OnInit {

  constructor(private gallery: GalleryService) { }
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
  ngOnInit() {
    this.gallery.getCategories().subscribe(res => {
        this.images = res;
        console.log(res);

    })
  }

}
