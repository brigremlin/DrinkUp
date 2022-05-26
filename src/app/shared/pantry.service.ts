import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Pantry } from './pantry.model';

@Injectable()
export class PantryService {
  constructor(private http: HttpClient) {}

  pantryIngredients: Pantry[] = [];
  searchValue:string;


  getIngredients() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' + environment.cocktailDBKey + '/list.php?i=list'
      )
      .pipe(
        map((ingredients) => {
          return ingredients.drinks;
        })
      );
  }

  searchIngredients(ingredient) {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' + environment.cocktailDBKey + '/search.php?i=' + ingredient
      )
      .pipe(
        map((ingredients) => {
          console.log(ingredients)
          return ingredients.ingredients;
        })
      );
  }

}
