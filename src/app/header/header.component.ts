import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { faGlassWhiskey } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

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

  constructor(private authService: AuthService) { }

  ngOnInit(){
    console.log(this.isLoggedIn)
    this.userSub = this.authService.user.subscribe(user => {
      console.log(user)
      if(user){
        this.isLoggedIn = !this.isLoggedIn;
        console.log(this.isLoggedIn)
      }
    })
  }

  onLogout(){
    this.authService.logout;
  }

}
