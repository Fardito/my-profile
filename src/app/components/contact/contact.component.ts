import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@ViewChild('f') slForm: NgForm;

userActivated = false;

  constructor() { }

  ngOnInit(): void {
  }

  clearForm(){
    this.slForm.reset();
  }

  onSubmit(form: NgForm){
    form.reset();
  }

  onActivate(){
    this.userActivated = true;
    let user = {
      firstName: this.slForm.value['first-name'],
      lastName: this.slForm.value['last-name'],
      email: this.slForm.value['email'],
      message: this.slForm.value['message'],
    }
  }
}
