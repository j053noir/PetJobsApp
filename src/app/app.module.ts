import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FilterComponent } from './components/home/catalogs/filter/filter.component';
import { PetsComponent } from './components/home/catalogs/pets/pets.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { MaterialModule } from './material/material.module';
import { PetItemComponent } from './components/home/catalogs/pets/pet-item/pet-item.component';
import { ShopComponent } from './components/home/catalogs/shop/shop.component';
import { ShopItemComponent } from './components/home/catalogs/shop/shop-item/shop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    PetsComponent,
    FilterComponent,
    PetItemComponent,
    ShopComponent,
    ShopItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
