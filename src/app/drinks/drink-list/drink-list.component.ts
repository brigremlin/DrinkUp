import { Component, Injectable, OnInit, Output } from '@angular/core';
import { Drink } from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';
import { Subscription } from 'rxjs';
import { FavoriteService } from '../favorite.service';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css'],
})
export class DrinkListComponent implements OnInit {
  myDrinks: Drink[] = [];
  subscription: Subscription;
  faBeer = faBeer;
  popularSubscription: Subscription;
  popularDrinks: Drink[] = [];

  constructor(
    private drinkService: DrinkService,
    private favoriteService: FavoriteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.drinkService.getDrinks().subscribe((drinks) => {
      this.myDrinks = drinks;
    });
    this.popularSubscription = this.drinkService
      .getPopular()
      .subscribe((drinks) => {
        this.popularDrinks = drinks;
      });
  }
}
