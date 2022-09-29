import { CartListType } from './../../../services/shopping-cart/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  constructor(private cartService: ShoppingCartService) {}

  cartList: CartListType[] = [];
  listSub: Subscription;

  ngOnInit(): void {
    this.listSub = this.cartService
      .getCartList()
      .subscribe((item) => (this.cartList = item));
  }

  ngOnDestroy(): void {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }

  amountOfGoods() {
    return this.cartList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    );
  }

  remove(id: number) {
    this.cartService.deleteCart(id).subscribe(() => {
      this.cartList = this.cartList.filter((i) => i.id !== id);
    });
  }
}
