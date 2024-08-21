import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  template: `
  <form (ngSubmit)="loginto()">
    <label>Username:</label>
    <input type="text" [(ngModel)]="username">
    <br>
    <label>Password:</label>
    <input type="password" [(ngModel)]="password">
    <br>
    <button type="submit">Login</button>
  </form>
  `
})

export class LoginComponent implements OnInit{
  userID: any;
  username: string;
  password: string;
  // title = 'Forms';
  // loginform=new FormGroup({
  //   user:new FormControl('',[Validators.required, Validators.email]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(6)])
  // });
  constructor (private router: Router, private http: HttpClient, private service: BookingService){}
 
  ngOnInit(): void {
    this.userID = JSON.parse(localStorage.getItem('userID'));

  }
login(){
  const loginRequest = { username: this.username, password: this.password };
  this.http.post('http://localhost:8084/api/login', loginRequest)
    .subscribe((response: any) => {
      if (response) {
        // login successful, store user data in local storage
        localStorage.setItem('userID', JSON.stringify(response));
        // redirect to dashboard
        this.router.navigate(['/book']);
      } else {
        // login failed, display error message
        alert('Invalid username or password');
      }
    });
}

loginto(): void{
  this.router.navigate(['/book']);

}

}
