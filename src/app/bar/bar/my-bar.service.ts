import { Pantry } from "src/app/shared/pantry.model";


export class MyBarService {
  myBar: Pantry[] = [];

  addToBar() {
    this.myBar.slice();
  }
}
