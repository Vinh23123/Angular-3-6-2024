import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css',
})
export class Assignment3Component {
  passwordCreated = false;
  password = 'Secrect Password = Tuna';
  noPassword = '';
  numberArray = [];
  onCreatePassword() {
    this.passwordCreated = true;
    this.noPassword = this.password;
    this.numberArray.push(this.numberArray.length + 1);
  }
}
