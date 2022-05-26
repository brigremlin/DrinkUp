import { Component, Injectable, OnInit } from '@angular/core';
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
  myCabinet;
  addedItem = true;
  subscription: Subscription;
  name: string;
  searchedList;
  searchValue: string = '';
  searchSubscription: Subscription;
  imagePath = "www.thecocktaildb.com/images/ingredients/"
  imagePathEnd = "-Small.png"
  p=1
  count;
  ingredient;
  clicked =0;
  isAdded = false;

  constructor(
    private pantryService: PantryService,
    private barService: MyBarService
  ) {}

  ngOnInit() {
    this.subscription = this.pantryService
      .getIngredients()
      .subscribe((ingredients) => {
        this.myBar = ingredients;
        console.log(this.myBar)
        this.count = ingredients.length;
        this.myBar.forEach((element) => {
          this.name = element.strIngredient1;
        });
      });
  }


  onAddToCabinet(pantry: Pantry) {
    this.barService.addIngredient(pantry).subscribe((data) => {
      this.myCabinet = data
      console.log(pantry.strIngredient1)
      for (let i = 0; i < this.myCabinet.length; i++) {
        if(this.myCabinet[i].idDrink == pantry.strIngredient1){
          break;
        } else {
          this.barService.addIngredient(pantry).subscribe((data) => {
            console.log(data)
          })
          break;
        }
      }
    })
  }

  onTableDataChange(event: any) {
    this.p = event;
  }

  onSearchIngredients(ingredient){
    this.pantryService.searchIngredients(ingredient).subscribe((data)=> {
      this.searchedList = data;
      console.log(this.searchedList)
      // this.searchedList = data
      // console.log(this.searchedList)
    })
  }
}
