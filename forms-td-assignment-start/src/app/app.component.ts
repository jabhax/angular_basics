import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  mail = '';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = this.subscriptions[1];
  subs = '';
  pw = '';
  submitted = false;

  onSubmit() {
    this.mail = this.signupForm.value.email;
    this.subs = this.signupForm.value.subscription;
    this.pw = this.signupForm.value.password;
    this.submitted = true;
    this.signupForm.reset();
  }

}
