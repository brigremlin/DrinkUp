import { Component, Injectable, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Drink } from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';
import { FavoriteService } from '../favorite.service';


@Injectable()
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent implements OnInit {
  favoritesList;
  p=1;
  count;


  constructor(private favoriteService: FavoriteService, private drinkService: DrinkService) { }

  ngOnInit() {
    this.favoriteService.getFavorites().subscribe((res) => {
      this.favoritesList = res.payload
      console.log(this.favoritesList)
      this.count = res.payload.length
    })
  }

  onRemoveFromFavorites(id) {
    this.favoriteService.deleteDrink(id).subscribe((res) => {
      window.location.reload()
    })
  }

  drinkDetails(id: string) {
    console.log(id);
    this.drinkService.getAlcoholicCocktail(id);
  }

  onTableDataChange(event: any) {
    this.p = event;
  }
}
