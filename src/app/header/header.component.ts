import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { faGlassWhiskey } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faWine = faWineBottle;
  faBeer = faBeer;
  faWhiskey = faGlassWhiskey;
  collapsed = true;
  @Input() ageVerified;
  dropdown = true;
  isLoggedIn = false;
  userSub: Subscription
  user = new BehaviorSubject<User>(null);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      if(user){
        this.isLoggedIn = true;
      }
    })
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout().subscribe((res: any) => {
      if(res.success) {
        this.user.next(null);
        localStorage.removeItem('userData');
        this.isLoggedIn = false;
        // if(this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer);
        this.router.navigate(['auth']);
      }
    })
  }

}
