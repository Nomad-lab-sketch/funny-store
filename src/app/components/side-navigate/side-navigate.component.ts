import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigate',
  templateUrl: './side-navigate.component.html',
  styleUrls: ['./side-navigate.component.css'],
})
export class SideNavigateComponent implements OnInit {
  constructor(public commonService: CommonService) {}
  listPath = [
    {
      pathSvg: 'assets/icons/menu/bx-home.svg',
      pathUrl: '/',
      title: 'главная',
    },
    {
      pathSvg: 'assets/icons/menu/icons_grid.svg',
      pathUrl: '/catalog',
      title: 'каталог',
    },
    {
      pathSvg: 'assets/icons/menu/bx-gift.svg',
      pathUrl: '/gift',
      title: 'гифт ключи',
    },
    {
      pathSvg: 'assets/icons/menu/bxs-discount.svg',
      pathUrl: '/transactions',
      title: 'сделки',
    },
    {
      pathSvg: 'assets/icons/menu/bytesize_cart.svg',
      pathUrl: '/cart',
      title: 'корзина',
    },
    {
      pathSvg: 'assets/icons/menu/info.svg',
      pathUrl: '/faq',
      title: 'о нас',
    },
  ];
  ngOnInit(): void {}
}
