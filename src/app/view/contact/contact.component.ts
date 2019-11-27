import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: Contact;
  submitted: boolean;
  msgArray = [];
  contactform: FormGroup;
  constructor( private service: BlogService) { }

   ngOnInit() {
    this.contactform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      message: new FormControl('')
    });
    this.getContact();
   }


  onSubmit() {
    console.log("this.service.contactform.value", this.contactform.value)
    this.model = this.contactform.value;
    this.service.insertContact(this.model);
    this.contactform.reset();
  }
 
  getContact(){
    this.service.getContactDetail().snapshotChanges().subscribe(res =>{
      console.log(res);
      this.msgArray = res.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });

     
    });
  }

}
