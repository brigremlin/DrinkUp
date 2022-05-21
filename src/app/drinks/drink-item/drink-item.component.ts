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
  favoriteList = [];

  isFavorited = false;

  constructor(private favoriteService: FavoriteService, private drinkService: DrinkService) {}

  onFavoritedDrinks(drink: Drink) {
    this.favoriteService.getFavorites().subscribe((data) => {
      this.favoriteList = data.payload
      console.log(drink.idDrink)
      for (let i = 0; i < this.favoriteList.length; i++) {
        if(this.favoriteList[i].idDrink == drink.idDrink){
          break;
        } else {
          this.favoriteService.favoriteDrink(drink).subscribe((data) => {
            console.log(data)
          })
          break;
        }
      }
    })
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
