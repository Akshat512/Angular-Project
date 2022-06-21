import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdforms';
  loans = ['Home Loan','Study Loan','Personal Loan','Car Loan','Other'];

  userModel = new User('','',9041646083,'','male','XYZ Street','Hyderabad','Telangana','214003',true);
}
