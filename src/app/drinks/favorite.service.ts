import { Drink } from "../shared/drink.model";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable, Subject, tap } from "rxjs";
import { Token } from "@angular/compiler";
import { AuthService } from "../auth/auth.service";

interface ResponseData {
  token: { expiry: string; value: string };
}

interface FavoritesResponse {
  payload: { id: number; idDrink: string, strDrink:string, strDrinkThumb: string };
}

@Injectable()
export class FavoriteService{
  constructor(private http: HttpClient, private authService: AuthService) {}
  favoriteList;


  getFavorites(){
    const token = this.authService.currentUser._token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
    return this.http.get<any>("https://drinkup-base-api.herokuapp.com/api/v1/favorites/my_favorites", {headers: headers})

    }

  isFavorited(drink: Drink){
    if(this.favoriteList.includes(drink)){
      return true;
    }
    return false;
  }

  deleteDrink(id) {
    const token = this.authService.currentUser._token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
    return this.http.delete("https://drinkup-base-api.herokuapp.com/api/v1/favorites/" +id, {headers:headers})
  }

  favoriteDrink(drink) {
    const token = this.authService.currentUser._token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      return this.http.post("https://drinkup-base-api.herokuapp.com/api/v1/favorites", drink, {headers: headers})
    }

  }



