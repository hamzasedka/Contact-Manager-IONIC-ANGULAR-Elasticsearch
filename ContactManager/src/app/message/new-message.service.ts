import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewMessageService {
  header:HttpHeaders;

  constructor(public http:HttpClient) { }

  
  addMessage(message){
    let url="contactmanager/message";
    this.header=new HttpHeaders();
    this.header.append('Content-Type','application/json');
  return this.http.post(url,message,{headers:this.header});
  }

  ShowRequest() {
    let url="contactmanager/message/_search";
    this.header=new HttpHeaders();
    ///definir le content-type pour que le serveur connaitre le type de return
    this.header.append('Content-Type','application/json');
   return this.http.get(url,{headers:this.header});
    
  }
}
