import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Pantry } from "src/app/shared/pantry.model";

@Injectable()
export class MyBarService {
  constructor(private authService: AuthService, private http: HttpClient){}
  myBar: Pantry[] = [];
  private data;

  getIngredients(){
    const token = this.authService.currentUser._token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
    return this.http.get<any>("https://drinkup-base-api.herokuapp.com/api/v1/ingredients/my_ingredients", {headers: headers})
    }

    deleteIngredient(id) {
      const token = this.authService.currentUser._token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      return this.http.delete("https://drinkup-base-api.herokuapp.com/api/v1/ingredients/" + id , {headers: headers})
    }

  addIngredient(pantry) {
    const token = this.authService.currentUser._token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      return this.http.post("https://drinkup-base-api.herokuapp.com/api/v1/ingredients", pantry, {headers: headers})
    }
}
