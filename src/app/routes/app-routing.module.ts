import { ShoppingCartComponent } from './../components/content/shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogComponent } from '../components/content/catalog/catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
