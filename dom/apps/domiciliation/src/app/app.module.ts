import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgrxStoreModule } from '@dom/data/ngrx-store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { API_URL_TOKEN } from '@dom/common/core';
import { TokenInterceptor, AuthenticationModule } from '@dom/infra/auth';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InfraPwaModule } from '@dom/infra/pwa';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgrxStoreModule,
    AuthenticationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    InfraPwaModule
  ],
  providers: [
    {
      provide: API_URL_TOKEN,
      useValue: environment.authServiceUrl
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
