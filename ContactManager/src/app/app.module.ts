import { HttpClientModule } from '@angular/common/http';

import { Contact } from '@ionic-native/contacts/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { Shake } from '@ionic-native/shake/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  CallNumber,
  SMS,
  Contact,
  Shake,
  Screenshot
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
