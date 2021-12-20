import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {Contact, ContactField,ContactAddress } from '@ionic-native/contacts';
import {Plugins} from '@capacitor/core';
const {Contactplug}=Plugins;


@Injectable({
  providedIn: 'root'
})
export class SaveContactService {
  //Contacs vs Contact ????
  constructor(private AlertController:AlertController) { 

  }

saveContact(firstname,lastname,phonenumber,adresse,email){
let contact:Contact=Contactplug.create();
contact.displayName=firstname+" "+lastname;
contact.phoneNumbers=[new ContactField('mobile',phonenumber,true)];
contact.addresses=[new ContactAddress(adresse)];
contact.emails=[new ContactField(email)];
contact.save().then(
() => this.popup(),
(error: any) => console.error('Error saving contact.', error)
);
}

popup(){
  const alert=this.AlertController.create({
    header: 'Done',
    buttons: ['OK']
  }).then(alert=>alert.present());
 }
}
