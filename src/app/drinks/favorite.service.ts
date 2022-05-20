import { Drink } from "../shared/drink.model";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { Token } from "@angular/compiler";

interface ResponseData {
  token: { expiry: string; value: string };
}

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
    this.http.post<ResponseData>("https://drinkup-base-api.herokuapp.com/api/v1/users/login", {
      email: "123@test.com",
      password: "password"
    }).subscribe((data) => {
      console.log(data)
      const token = data.token
      console.log(token)
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer  + ${token}`
      })
      console.log(headers)
      this.http.post("https://drinkup-base-api.herokuapp.com/api/v1/favorites", drink, {headers: headers}).subscribe((res) => {
        console.log(res)
      }
    )
    });
  }

}

