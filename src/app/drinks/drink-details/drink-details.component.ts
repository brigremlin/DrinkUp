import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { single } from 'rxjs/operators';
import { Drink } from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css'],
})
export class DrinkDetailsComponent implements OnInit {
  id;
  drink;
  drinks: Drink[] = [];
  drinkSubscription: Subscription;
  singleDrink: Drink;
  ingredients = [];

  constructor(private drinkService: DrinkService) {}

  ngOnInit() {
    this.drinkSubscription = this.drinkService.drinkSubject.subscribe((res) => {
      this.singleDrink = res;
      this.getIngredients(this.singleDrink);
    });
  }

  getIngredients(drink: Drink) {
    for (let i = 1; i <= 15; i++) {
      if (drink['strIngredient' + i]) {
        if (!this.ingredients.includes(drink['strIngredient' + i])) {
          this.ingredients.push({name:drink['strIngredient' + i], amount: drink['strMeasurement'+i]});
          console.log(this.ingredients);
        }
      }
    }
  }
}
