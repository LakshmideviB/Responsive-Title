import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { NgMaterialModule } from './ng-materal/ng-material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {
  StoreModule
} from '@ngrx/store';
import { counterReducer } from './store/reducers/counter';


@NgModule({
  declarations: [AppComponent, NavBarComponent, SearchComponent, WishlistComponent, ShoppingCartComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    NgMaterialModule,
    StoreModule.forRoot({ 
      count: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
