import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrinkService } from 'src/app/drinks/drink.service';
import { FavoriteService } from 'src/app/drinks/favorite.service';
import { Drink } from 'src/app/shared/drink.model';
import "src/assets/css/letter.css";

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html'
})
export class CComponent implements OnInit {
  cDrinks: Drink[] = [];
  subscription: Subscription;
  @Input() drink;
  @Input() index;
  isFavorited = false;
  p=1;
  count

  constructor(
    private drinkService: DrinkService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.subscription = this.drinkService.getC().subscribe((drinks) => {
      console.log(drinks);
      this.cDrinks = drinks;
      this.count = drinks.length
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

  onTableDataChange(event: any) {
    this.p = event;
  }
}
