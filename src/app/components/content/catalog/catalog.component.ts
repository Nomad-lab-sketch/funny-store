import { Subscription } from 'rxjs';
import { Catalog } from './../../../services/catalog/catalog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog/catalog.service';
import {
  SliderService,
  SliderType,
} from 'src/app/services/catalog/slider/slider.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  constructor(
    private catalogService: CatalogService,
    private sliderService: SliderService,
    public errorService: ErrorService
  ) {}

  productCards: Catalog[];
  listImg: SliderType[];
  error: string;

  getProductCardsSubscribe: Subscription;
  getImgSubscribe: Subscription;
  getError: Subscription;

  ngOnInit(): void {
    this.getProductCardsSubscribe = this.catalogService
      .getCatalog()
      .subscribe((item) => (this.productCards = item));

    this.getImgSubscribe = this.sliderService
      .getImgForSlider()
      .subscribe((item) => (this.listImg = item));

    this.getError = this.errorService.error$.subscribe(
      (item) => (this.error = item)
    );
  }

  ngOnDestroy() {
    this.getProductCardsSubscribe.unsubscribe();
    this.getImgSubscribe.unsubscribe();
  }
}
