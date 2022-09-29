import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
})
export class CatalogListComponent implements OnInit {
  constructor() {}

  @Input('title') title: string;
  @Input('items') items: Array<{ img: string; title: string; price: number }>;

  ngOnInit(): void {}
}
