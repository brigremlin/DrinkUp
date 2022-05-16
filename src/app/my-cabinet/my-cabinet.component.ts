import { Component, OnInit } from '@angular/core';
import { Pantry } from 'src/app/shared/pantry.model';
import { PantryService } from 'src/app/shared/pantry.service';
import { MyBarService } from '../bar/bar/my-bar.service';

@Component({
  selector: 'app-my-cabinet',
  templateUrl: './my-cabinet.component.html',
  styleUrls: ['./my-cabinet.component.css']
})
export class MyCabinetComponent implements OnInit {
  myCabinet: Pantry[] = [];
  addedItem = true;

  constructor(private pantryService: PantryService,
              private barService: MyBarService) { }

  ngOnInit() {
    this.myCabinet = this.barService.myBar;
  }

  onRemoveFromCabinet(pantry: Pantry, i: number) {
    this.myCabinet.splice(i,1);
  }

}
