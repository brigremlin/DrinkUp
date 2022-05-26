import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PantryService } from 'src/app/shared/pantry.service';
import { environment } from 'src/environments/environment';
import { MyBarService } from '../bar/bar/my-bar.service';
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
  length;

  constructor(
    private pantryService: PantryService,
    private barService: MyBarService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.barService.getIngredients().subscribe((res) => {
      this.myCabinet = res.payload;
      console.log(this.myCabinet);
    });
  }

  onRemoveFromCabinet(id) {
    this.barService.deleteIngredient(id).subscribe((res) => {
      this.router.navigate(['bar'])
    });
  }

  makeCocktail() {
    this.clicked = 1;
    const ingredients = [];
    for(let i=0; i<this.myCabinet.length;i++){
      ingredients[i] = this.myCabinet[i].strIngredient1;
    }
    console.log(ingredients)
    const ingredientList = ingredients.toString()
    console.log(ingredientList)
    this.http.get<any>('https://www.thecocktaildb.com/api/json/v2/'+ environment.cocktailDBKey+'/filter.php?i=' + ingredientList).subscribe((res) => {
      this.drinkList = res.drinks;
      console.log(this.drinkList)
      this.length = res.drinks.length;
      console.log(this.length)
    })
  }
}
