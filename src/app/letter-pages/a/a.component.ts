import "src/assets/css/letter.css";
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrinkService } from 'src/app/drinks/drink.service';
import { FavoriteService } from 'src/app/drinks/favorite.service';
import { Drink } from 'src/app/shared/drink.model';
import { NgxPaginationModule } from "ngx-pagination";


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html'
})
export class AComponent implements OnInit {
  aDrinks: Drink[] = [];
  subscription: Subscription;
  @Input() drink;
  @Input() index;
  isFavorited= false;
  count;
  p=1

  constructor(private drinkService: DrinkService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.subscription = this.drinkService.getA().subscribe((drinks) => {
      console.log(drinks);
      this.aDrinks = drinks;
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

}
