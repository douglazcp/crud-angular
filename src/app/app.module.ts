import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTipoItemComponent } from './components/add-tipo-item/add-tipo-item.component';
import { DeleteTipoItemComponent } from './components/delete-tipo-item/delete-tipo-item.component';
import { TipoItemDetailsComponent } from './components/tipo-item-details/tipo-item-details.component';
import { TipoItemListComponent } from './components/tipo-item-list/tipo-item-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddTipoItemComponent,
    DeleteTipoItemComponent,
    TipoItemDetailsComponent,
    TipoItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
