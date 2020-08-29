import { Component } from '@angular/core';


@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styles: [`
    .high {
      color: white;
    }
  `]
})
export class SecretComponent {
  pw = 'testpass';
  passwords = [];
  passwordCreated = false;

  constructor() {}

  onCreatePassword(): void {
    //var newPass = this.pw;
    this.passwordCreated = !this.passwordCreated;
    this.passwords.push(new Date());
  }
}
