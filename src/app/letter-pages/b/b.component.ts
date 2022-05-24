import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrinkService } from 'src/app/drinks/drink.service';
import { FavoriteService } from 'src/app/drinks/favorite.service';
import { Drink } from 'src/app/shared/drink.model';
import "src/assets/css/letter.css";


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html'
})
export class BComponent implements OnInit {

  bDrinks: Drink[] = [];
  subscription: Subscription;
  @Input() drink;
  @Input() index;
  isFavorited= false;
  p=1;
  count

  constructor(private drinkService: DrinkService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.subscription = this.drinkService.getB().subscribe((drinks) => {
      console.log(drinks);
      this.bDrinks = drinks;
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
