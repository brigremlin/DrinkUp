import { Component, Injectable, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
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
  isLoggedIn = false;
  userSub: Subscription;

  constructor(
    private pantryService: PantryService,
    private barService: MyBarService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.pantryService
      .getIngredients()
      .subscribe((ingredients) => {
        this.myBar = ingredients;
        this.count = ingredients.length;
        this.myBar.forEach((element) => {
          this.name = element.strIngredient1;
        });
      });
      this.userSub = this.authService.user.subscribe(user => {
        if(user){
          this.isLoggedIn = true;
          console.log(this.isLoggedIn)
        } else {
          this.isLoggedIn = false;
          console.log(this.isLoggedIn)
        }
      })
  }


  onAddToCabinet(pantry: Pantry) {
    this.barService.getIngredients().subscribe((res) => {
      this.myCabinet = res.payload
      console.log(res.payload)
      if(this.myCabinet.length == 0){
        this.barService.addIngredient(pantry).subscribe((res) => {
          console.log(res)
        })
      } else {
       for (let i = 0; i < this.myCabinet.length; i++) {
        if(this.myCabinet[i].strIngredient1 === pantry.strIngredient1){
          break;
        } else {
          this.barService.addIngredient(pantry).subscribe((res)=> {
            console.log(res)
          })
          break;
        }
    }}
  });
  }

  onTableDataChange(event: any) {
    this.p = event;
  }

  onSearchIngredients(ingredient){
    this.pantryService.searchIngredients(ingredient).subscribe((data)=> {
      this.searchedList = data;
      // this.searchedList = data
      // console.log(this.searchedList)
    })
  }
}
