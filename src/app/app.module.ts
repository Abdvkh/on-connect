import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { entityConfig } from './entity-metadata';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { fakeBackendProvider } from './core/interceptors/fake-backend.interceptor';
import { ActsPageModule } from './pages/acts-page/acts-page.module';
import { RegisterPageModule } from './pages/register-page/register-page.module';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:4200/api/',
  timeout: 3000 // request timeout
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    LoginPageModule,
    ActsPageModule,
    RegisterPageModule
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
