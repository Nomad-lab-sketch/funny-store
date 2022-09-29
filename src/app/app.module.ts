import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleButtonComponent } from './modules/simple-button/simple-button.component';
import { SideNavigateComponent } from './components/side-navigate/side-navigate.component';
import { SvgIconsComponent } from './modules/svg-icons/svg-icons.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './modules/slider/slider.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { CatalogComponent } from './components/content/catalog/catalog.component';
import { CardComponent } from './modules/card/card.component';
import { CatalogListComponent } from './modules/catalog-list/catalog-list.component';
import { ShoppingCartComponent } from './components/content/shopping-cart/shopping-cart.component';
import { ImageComponent } from './modules/image/image.component';
import { ToastComponent } from './modules/toast/toast.component';
import { IsEmptyPipe } from './pipes/is-empty.pipe';
import { ModalWindowComponent } from './modules/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleButtonComponent,
    SideNavigateComponent,
    SvgIconsComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CatalogComponent,
    CardComponent,
    CatalogListComponent,
    ShoppingCartComponent,
    ImageComponent,
    ToastComponent,
    IsEmptyPipe,
    ModalWindowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
