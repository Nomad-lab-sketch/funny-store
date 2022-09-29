import { Subscription } from 'rxjs';
import { SliderType } from './../../services/catalog/slider/slider.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() alt?: string;
  @Input() listImg: SliderType[];

  activeSlide: number = 0;
  getImgSubscribe: Subscription;
  timerId: any;
  ngOnInit(): void {
    this.timerId = setInterval(() => {
      this.activeSlide =
        this.activeSlide < this.listImg.length - 1 ? ++this.activeSlide : 0;
    }, 5000);
  }

  ngOnDestroy() {
    this.getImgSubscribe.unsubscribe();
    clearInterval(this.timerId);
  }
}
