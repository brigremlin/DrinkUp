import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { single } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Drink } from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css'],
})
export class DrinkDetailsComponent implements OnInit {
  id;
  drink;
  drinks: Drink[] = [];
  drinkSubscription: Subscription;
  singleDrink: Drink;
  ingredients = [];
  favorites;
  drinkId;
  isFavorited = false;
  isLoggedIn = false;
  userSub: Subscription;


  constructor(private drinkService: DrinkService, private favoriteService: FavoriteService, private router:Router, private authService: AuthService) {}

  ngOnInit() {
    this.drinkSubscription = this.drinkService.drinkSubject.subscribe((res) => {
      this.singleDrink = res;
      this.drinkId = this.singleDrink.idDrink
      this.getIngredients(this.singleDrink);
      console.log(this.singleDrink.idDrink)
      this.favoriteService.getFavorites().subscribe((res) => {
        this.favorites = res.payload
        const length = res.payload.length
        for(let i=0; i<res.payload.length; i++){
          if(res.payload[i].idDrink == this.singleDrink.idDrink){
            this.isFavorited = true;
            this.id = res.payload[i].id;
            break;
          } else {
            this.isFavorited = false;
          }
        }
        return this.isFavorited;
      })
  });
   this.userSub = this.authService.user.subscribe(user => {
      console.log(user)
      if(user){
        this.isLoggedIn = true;
        console.log(this.isLoggedIn)
      } else {
        this.isLoggedIn = false;
      }
    })

  }

  getIngredients(drink: Drink) {
    for (let i = 1; i <= 15; i++) {
      if (drink['strIngredient' + i]) {
        if (!this.ingredients.includes(drink['strIngredient' + i])) {
          this.ingredients.push({name:drink['strIngredient' + i], amount: drink['strMeasurement'+i]});
        }
      }
    }
  }

  onFavoriteDrink(drink: Drink){
    this.favoriteService.favoriteDrink(drink).subscribe((res) => {
      console.log("favorited");
      this.router.navigate(['favorite'])
    })
  }

  onRemoveFromFavorites(id) {
    this.favoriteService.deleteDrink(id).subscribe((res) => {
      window.location.reload()
      this.router.navigate(['favorite'])
    })
  }
}
