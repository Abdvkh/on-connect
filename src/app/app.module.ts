import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule } from '@ngrx/data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, EntityDataModule.forRoot(entityConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
