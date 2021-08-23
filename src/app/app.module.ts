import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEnqueteComponent } from './components/add-enquete/add-enquete.component';
import { EnqueteDetailsComponent } from './components/enquete-details/enquete-details.component';
import { EnqueteListComponent } from './components/enquete-list/enquete-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEnqueteComponent,
    EnqueteDetailsComponent,
    EnqueteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
