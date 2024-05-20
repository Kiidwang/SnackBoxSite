import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here for form controls
import { CommonModule } from '@angular/common';

declare const gapi: any; // Declare the Google API

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Include FormsModule in imports for ngModel usage
})
export class LoginComponent implements OnInit {
  show = false;
  username: string = '';
  password: string = '';
  private clientId: string = '939028778294-nug02ql7604pvh0h4c26gc78cvvucoq8.apps.googleusercontent.com'; // Replace YOUR_CLIENT_ID with your actual client ID

  constructor() {}

  ngOnInit() {
    gapi.load('auth2', () => {
      gapi.auth2.init({ client_id: this.clientId });
    });
  }

  toggleModal() {
    this.show = !this.show;
  }

  login() {
    console.log(`Login attempt with username: ${this.username} and password: ${this.password}`);
  }

  signInWithGoogle() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn({
      scope: 'profile email' // Requesting access to profile and email
    }).then((googleUser: any) => {
      console.log(googleUser.getBasicProfile().getName());
      console.log(googleUser.getAuthResponse().id_token);
      // Handle the successful response here
    }).catch((error: any) => {
      console.error('Error signing in', error);
    });
  }
}
