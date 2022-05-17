import { Drink } from "../shared/drink.model";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable()
export class FavoriteService {
  constructor(private http: HttpClient) {}

  favoriteList: Drink[] = [];
  drinkSelected = new Subject<Drink>();
  drinkListChanged = new Subject<Drink[]>();

  getFavorites() {
    return this.favoriteList.slice();
  }

  isFavorited(drink: Drink){
    if(this.favoriteList.includes(drink)){
      return true;
    }
    return false;
  }

  favoriteDrink(drink) {
    this.http.post("https://drinkup-base-api.herokuapp.com/api/v1/favorites", drink).subscribe((res:any) => {
      this.isFavorited(res.payload.drink);
    }
  )}
  
}

