import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_DATE_LOCALE, NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { vi } from 'date-fns/locale';
import { AuthorizeInterceptor } from './auth/authorize.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiAuthorizationModule } from './auth/api-authorization.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiAuthorizationModule
  ],
  providers: [
    { provide: NZ_DATE_LOCALE, useValue: vi },
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthorizeInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
