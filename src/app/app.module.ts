import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BondReviewComponent } from './bond-review/bond-review.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    BondReviewComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    TableModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
