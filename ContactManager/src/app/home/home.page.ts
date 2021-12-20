import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { element } from 'protractor';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
selectPage="Call";
Number="";


  constructor(
    private callNumber:CallNumber,private sms:SMS) {
  
  }

getvalue(value){
this.Number=this.Number+value;
}

Clear_Number(){
this.Number="";
}
 
call(){
  if(this.Number!="")
this.callNumber.callNumber(this.Number,true);
}
  
    
    

  
   

    
}



