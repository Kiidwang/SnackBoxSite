import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SnackBoxSite';

  @ViewChild(LoginComponent, { static: false }) loginComponent!: LoginComponent;

  openLoginModal() {
    if (this.loginComponent) {
      this.loginComponent.toggleModal();
    }
  }
}

