import { Component, Injectable, OnInit } from '@angular/core';
import { Drink } from 'src/app/shared/drink.model';
import { FavoriteService } from '../favorite.service';


@Injectable()
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent implements OnInit {
  favoritesList: Drink[] = [];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.favoritesList = this.favoriteService.favoriteList;

  }

  onRemoveFromFavorites(drink:Drink, i: number) {
    this.favoritesList.splice(i,1)
  }

}
