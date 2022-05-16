import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrinkService } from 'src/app/drinks/drink.service';
import { FavoriteService } from 'src/app/drinks/favorite.service';
import { Drink } from 'src/app/shared/drink.model';
import "src/assets/css/letter.css";


@Component({
  selector: 'app-z',
  templateUrl: './z.component.html'
})
export class ZComponent implements OnInit {
  zDrinks: Drink[] = [];
  subscription: Subscription;
  @Input() drink;
  @Input() index;
  isFavorited = false;

  constructor(
    private drinkService: DrinkService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.subscription = this.drinkService.getZ().subscribe((drinks) => {
      console.log(drinks);
      this.zDrinks = drinks;
    });
  }

  onFavoritedDrinks(drink: Drink) {
    this.isFavorited = this.favoriteService.isFavorited(drink);
    if (!this.favoriteService.isFavorited(drink)) {
      this.favoriteService.favoriteList.push(drink);
      this.isFavorited = !this.isFavorited;
    } else {
      this.favoriteService.favoriteList.splice(this.index, 1);
    }
  }
}
