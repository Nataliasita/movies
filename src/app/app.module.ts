import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogeComponent } from './components/catalogue/cataloge.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http' 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogeComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
