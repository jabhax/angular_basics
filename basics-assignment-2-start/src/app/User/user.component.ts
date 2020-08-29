import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  username = '';

  onResetUsername(): void {
    this.username = '';
  }

  getUsername(): String {
    return this.username;
  }
}
