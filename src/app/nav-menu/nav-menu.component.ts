import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
 export class NavMenuComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject();
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService,
    private router: Router) {
    this.authService.authStatus
      .pipe(takeUntil(this.destroySubject))
      .subscribe(result => {
        this.isLoggedIn = result;
      })
  }
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(["/"]);  // Return to home page
  }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
  ngOnDestroy() {
    this.destroySubject.next(true);
    this.destroySubject.complete();
  }
}
