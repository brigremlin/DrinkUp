import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { FavoriteService } from 'src/app/drinks/favorite.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  
  constructor(private http: HttpClient, private authService: AuthService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService.getFavorites().subscribe
  }

}
