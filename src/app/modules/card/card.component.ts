import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input('item') item: { img: string; title: string; price: number };

  ngOnInit(): void {}
}
