import { Drink } from "../shared/drink.model";

import { Injectable } from "@angular/core";

@Injectable()
export class FavoriteService {
  constructor() {}


  favoriteList: Drink[] = [];

  getFavorites() {
    return this.favoriteList.slice();
  }

  isFavorited(drink: Drink){
    if(this.favoriteList.includes(drink)){
      return true;
    }
    return false;
  }

}

