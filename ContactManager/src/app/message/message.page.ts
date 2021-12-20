import { SMS } from '@ionic-native/sms/ngx';
import { NewMessageService } from './new-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  NewMessage="";
  currentUser="";

  PhoneNumber="";
  
  myPhoneNumber="";
  constructor(private newMessageS:NewMessageService,private sms:SMS
    ) {
    
   }






  

  sendToOthers(){
    let message=
    {createdAt:new Date().getTime(),
     message:this.NewMessage,
     myphoneNumber:this.myPhoneNumber,
    PhoneNumber:this.PhoneNumber 
   };

     this.sms.send(this.PhoneNumber,this.NewMessage);
     this.newMessageS.addMessage(message).subscribe();
     this.newMessageS.ShowRequest().subscribe((response)=>{this.messages=response['hits']['hits'];});

     }

    




  







messages:any;
     
  ngOnInit() {
    
  
    this.newMessageS.ShowRequest().subscribe((response)=>{this.messages=response['hits']['hits'];});


  }

}
