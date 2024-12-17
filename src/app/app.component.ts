import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  {
  title = 'Multibalas';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.init();
  }
}