import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() sectionId = new EventEmitter<string>

  move(event: any) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    this.sectionId.emit(href);
  }
}
