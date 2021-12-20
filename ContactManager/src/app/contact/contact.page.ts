import { AlertController } from '@ionic/angular';
import { CallAndSendService } from './call-and-send.service';


import { Component, OnInit } from '@angular/core';
import { Contact } from '@ionic-native/contacts/ngx';
import {Plugins} from '@capacitor/core';
const {Contacts}=Plugins;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  selectPage="Contact";
  inputValue:"";
  constructor(public callAndsend:CallAndSendService,private AlertController:AlertController    ) {
    this.callAndsend.loadContacts();
   }


  ngOnInit() {
    
  }

   deleteContact(contact:Contact) {
       contact.remove().then(()=>{
         this.popup();
         this.callAndsend.loadContacts();

       });
        

  }
  popup(){
    const alert=this.AlertController.create({
      header: 'Done',
      buttons: ['OK']
    }).then(alert=>alert.present());
   }

}
