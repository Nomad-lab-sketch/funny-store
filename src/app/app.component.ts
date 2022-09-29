import { CommonService } from './services/common.service';
import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public commonService: CommonService) {}

  title = 'funny-store';
  activeScroll = false;

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    this.animOnScroll();
  }

  animOnScroll() {
    const scrollTop = window.scrollY;
    scrollTop >= 110 ? (this.activeScroll = true) : (this.activeScroll = false);
  }
}
