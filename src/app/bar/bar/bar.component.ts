import { Component, Injectable, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Pantry } from 'src/app/shared/pantry.model';
import { PantryService } from 'src/app/shared/pantry.service';
import { MyBarService } from './my-bar.service';

@Injectable()
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  myBar: Pantry[] = [];
  myCabinet: Pantry[] = [];
  addedItem = true;
  subscription: Subscription;
  name: string;
  searchedList: Pantry[] = [];
  searchValue: string = '';
  searchSubscription: Subscription;
  imagePath = "www.thecocktaildb.com/images/ingredients/"
  imagePathEnd = "-Small.png"
  p=1
  count;

  constructor(
    private pantryService: PantryService,
    private barService: MyBarService
  ) {}

  ngOnInit() {
    this.subscription = this.pantryService
      .getIngredients()
      .subscribe((ingredients) => {
        this.myBar = ingredients;
        this.count = ingredients.length;
        this.myBar.forEach((element) => {
          this.name = element.strIngredient;
        });
      });
  }

  onAddToCabinet(pantry: Pantry) {
    this.myCabinet = this.barService.myBar;
    if (!this.myCabinet.includes(pantry)) {
      this.myCabinet.push(pantry);
    }
  }

  onTableDataChange(event: any) {
    this.p = event;
  }
}
