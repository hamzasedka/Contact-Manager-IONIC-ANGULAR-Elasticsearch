import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { Shake } from '@ionic-native/shake/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShakeandscreenshotService {

  constructor(private platform:Platform,
    private shake:Shake,
    private screenshot:Screenshot,
    private alertController:AlertController ) {


   }
   shakeAndScreenShot(){
    this.platform.ready().then(()=>{
      this.shake.startWatch().subscribe(()=>{
        this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(()=>{
          this.presentAlert();
        });
      });
    });
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
