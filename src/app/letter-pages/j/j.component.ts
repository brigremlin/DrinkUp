import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrinkService } from 'src/app/drinks/drink.service';
import { FavoriteService } from 'src/app/drinks/favorite.service';
import { Drink } from 'src/app/shared/drink.model';
import "src/assets/css/letter.css";


@Component({
  selector: 'app-j',
  templateUrl: './j.component.html'
})
export class JComponent implements OnInit {
  jDrinks: Drink[] = [];
  subscription: Subscription;
  @Input() drink;
  @Input() index;
  isFavorited = false;

  constructor(
    private drinkService: DrinkService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.subscription = this.drinkService.getJ().subscribe((drinks) => {
      console.log(drinks);
      this.jDrinks = drinks;
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
