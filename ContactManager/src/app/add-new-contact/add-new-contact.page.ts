import { SaveContactService } from './save-contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.page.html',
  styleUrls: ['./add-new-contact.page.scss'],
})
export class AddNewContactPage implements OnInit {

  public form:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private saveContact:SaveContactService
    )
     { 
    this.form=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phoneNumber:['',Validators.required],
      email:['',Validators.required],
      adresse:['',Validators.required]
    
    });
  }

  ngOnInit() {
    
  }
 save(){
   let fields=this.form.value;
   
   
  this.saveContact.saveContact(fields.firstName,fields.lastName,fields.phoneNumber,fields.email,fields.adresse);
 }


}
