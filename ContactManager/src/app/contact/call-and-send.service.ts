
import { Injectable } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Plugins} from '@capacitor/core';
const {Contacts}=Plugins;

import { isPlatform } from '@ionic/angular';
import { Contact } from '@ionic-native/contacts/ngx';


@Injectable({
  providedIn: 'root'
})
export class CallAndSendService {
  arrayContacts=[];

  constructor(private callNumber:CallNumber) { 
    
  }
 
  async loadContacts(){
    if(isPlatform('android')){
      let permission=await Contacts.getPermissions();
      
      if (!permission.granted){
        return;
      }
    }
    
    Contacts.getContacts().then(result =>{
    console.log(result);
    
      this.arrayContacts=result.contacts;
    });
    }


    call(contact:Contact){
      this.callNumber.callNumber(contact.phoneNumbers[0]+"",true);
    }
   


/*
    SearchContact(inputValue){
   let Option={
      filter:inputValue,
      multiple:true,
      hasPhoneNumber:true
    };
    Contactplug.finde(['*'],Option).then((searchedContact:Contact[])=>{
    this.arrayContacts=searchedContact;
    
  });
    


      
    }*/

   

}