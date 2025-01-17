import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Jane', 'John', 'Doe'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // Log form value changes.
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // Log form status changes.
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    // Set form data
    this.signupForm.setValue({
      'userData': {
        'username': 'Justin',
        'email': 'Just@Test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    console.log('Pre-populated the form!');

    // Patch username field using patch.
    this.signupForm.patchValue({
      'userData': {
        'username': 'Jabhax',
      },
    });
    console.log('Patched the form pre-population!');
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return { 'UsernameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') resolve({ 'EmailIsForbidden': true });
          else resolve(null);
        }, 1500);
      }
    );
    return promise;
  }

}
