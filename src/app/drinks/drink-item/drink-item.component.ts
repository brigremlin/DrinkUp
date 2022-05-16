import { Component, Input, OnInit, Output } from '@angular/core';
import { Drink } from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';
import { FavoriteService } from '../favorite.service';
@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.css'],
})
export class DrinkItemComponent {
  @Input() drink;
  @Input() index;
  @Input() id;
  @Input() drinkId;
  ingredients: string[] = [];

  isFavorited = false;

  constructor(private favoriteService: FavoriteService, private drinkService: DrinkService) {}

  onFavoritedDrinks(drink: Drink) {
    this.isFavorited = this.favoriteService.isFavorited(drink);
    if (!this.favoriteService.isFavorited(drink)) {
      this.favoriteService.favoriteList.push(drink);
    } else {
      this.favoriteService.favoriteList.splice(this.index, 1);
    }
  }

  drinkDetail(id: string) {
    console.log(id);
    this.drinkService.getAlcoholicCocktail(id);
  }

  getIngredients(drink: Drink) {
    if (drink.strIngredient1 != null) {
      this.ingredients.push(drink.strIngredient1);
    }
  }
}
