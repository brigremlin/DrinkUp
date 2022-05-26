import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PantryService } from 'src/app/shared/pantry.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { MyBarService } from '../bar/bar/my-bar.service';
import { DrinkItemComponent } from '../drinks/drink-item/drink-item.component';
import { DrinkService } from '../drinks/drink.service';
import { Drink } from '../shared/drink.model';


@Component({
  selector: 'app-my-cabinet',
  templateUrl: './my-cabinet.component.html',
  styleUrls: ['./my-cabinet.component.css'],
})
export class MyCabinetComponent implements OnInit {
  myCabinet;
  addedItem = true;
  drinkList;
  clicked=0;
  results = true;

  constructor(
    private pantryService: PantryService,
    private barService: MyBarService,
    private router: Router,
    private http: HttpClient,
    private drinkService: DrinkService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.barService.getIngredients().subscribe((res) => {
      this.myCabinet = res.payload;
    });
  }

  onRemoveFromCabinet(id) {
    this.barService.deleteIngredient(id).subscribe((res) => {
      location.reload()
    });
  }

  drinkDetail(id: string) {
    this.drinkService.getAlcoholicCocktail(id);
  }

  makeCocktail() {
    this.clicked = 1;
    const ingredients = [];
    for(let i=0; i<this.myCabinet.length;i++){
      ingredients[i] = this.myCabinet[i].strIngredient1;
    }
    const ingredientList = ingredients.toString()
    this.http.get<any>('https://www.thecocktaildb.com/api/json/v2/'+ environment.cocktailDBKey+'/filter.php?i=' + ingredientList).subscribe((res) => {
      if(res.drinks != "None Found"){
        this.drinkList = res.drinks;
        this.results = true;
      } else {
        this.results = false;
      }
    })
  }
}
