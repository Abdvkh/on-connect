import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ActComponent } from './features/act/act.component';
import { ActListComponent } from './features/act/act-list/act-list.component';
import { ActListItemComponent } from './features/act/act-list-item/act-list-item.component';
import { ActCategoriesComponent } from './features/act/act-categories/act-categories.component';
import { ActDetailsComponent } from './features/act/act-details/act-details.component';
import { ActsComponent } from './features/acts/acts.component';
import { ActsPageComponent } from './pages/acts-page/acts-page.component';
import { ActCreatePageComponent } from './pages/act-create-page/act-create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ActComponent,
    ActListComponent,
    ActListItemComponent,
    ActCategoriesComponent,
    ActDetailsComponent,
    ActsComponent,
    ActsPageComponent,
    ActCreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
