import { Component, OnInit } from '@angular/core';
import {
  faBeerMugEmpty,
  faWineBottle,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DrinkService } from '../drinks/drink.service';
import { Drink } from '../shared/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private drinkService: DrinkService) {}
  myDrinks: Drink[] = [];
  subscription: Subscription;
  popularSubscription: Subscription;
  popularDrinks: Drink[] = [];
  featuredSubscription: Subscription;
  featuredDrink: Drink;
  public search = '';
  public cocktailList: Drink[] = [];
  public noResults = 'No Results Found';
  clicked: number;
  faWine = faBeerMugEmpty
  drinkOne;
  drinkTwo;
  drinkThree;


  ngOnInit() {
    this.subscription = this.drinkService.getDrinks().subscribe((drinks) => {
      this.myDrinks = drinks;
    });
    this.popularSubscription = this.drinkService
      .getPopular()
      .subscribe((drinks) => {
        this.popularDrinks = drinks;
        this.drinkOne = drinks[0];
        this.drinkTwo = drinks[1];
        this.drinkThree = drinks[2];
      });

    this.featuredSubscription = this.drinkService
      .getFeatured()
      .subscribe((drinks) => {
        this.featuredDrink = drinks;
      });
  }

  drinkDetail(id: string) {
    this.drinkService.getAlcoholicCocktail(id);
  }

  searchDrink(search: string) {
    this.clicked = 1;
    this.drinkService.getCocktailsByName(this.search).then((res) => {
      this.cocktailList = res;
    });
  }

  getMatchingList() {
    const matchingCocktail = [];
    for (const drink of this.cocktailList) {
      matchingCocktail.push(drink);
    }

    return matchingCocktail;
  }

  getPineapple(){
      this.drinkService.getCocktailsByName("pineapple").then((res) => {
        this.cocktailList = res;
        console.log(res)
      });
  }
  getLime(){
    this.drinkService.getCocktailsByName("lime").then((res) => {
      this.cocktailList = res;
      console.log(res)
    });
}
getChocolate(){
  this.drinkService.getCocktailsByName("chocolate").then((res) => {
    this.cocktailList = res;
    console.log(res)
  });
}
getApple(){
  this.drinkService.getCocktailsByName("apple").then((res) => {
    this.cocktailList = res;
    console.log(res)
  });
}

toSearch(){
  document.getElementById("search").scrollIntoView();
}
}
