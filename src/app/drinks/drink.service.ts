import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from '../shared/drink.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable()
export class DrinkService {
  constructor(private http: HttpClient) {}

  drinkList: Drink[] = [];
  drinkSubject = new Subject<Drink>();
  searchValue: string;
  ingredients: string[] = [];

  getCocktailsByName(name: string): Promise<Array<Drink>> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v2/'+ environment.cocktailDBKey+'/search.php', {
      params: {s: name}
    }).toPromise().then(res => {
      if (res['drinks']) {
        const drinks = [];
        for (const drink of res['drinks']) {
          drinks.push(drink);
        }
        return drinks;
      } else {
        return [];
      }
    });
  }

  getDrinks() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/recent.php'
      )
      .pipe(
        map((drinks) => {
          return drinks.drinks;
        })
      );
  }

  getFeatured() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/random.php'
      )
      .pipe(
        map((drinks) => {
          return drinks.drinks;
        })
      );
  }

  getAlcoholicCocktail(id: string) {
    this.http
      .get(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/lookup.php?i=' +
          id
      )
      .pipe(map((data: any) => data.drinks.map(Drink.adapt)))
      .subscribe((res) => {
        console.log(res);
        this.drinkSubject.next(res[0]);
      });
  }

  getDrink(id: number) {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/lookup.php?i=' +
          id
      )
      .subscribe((data) => {
        console.log(id);
        return data.drinks;
      });
  }

  getPopular() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/popular.php'
      )
      .pipe(
        map((drinks) => {
          return drinks.drinks;
        })
      );
  }

  getNonAlcoholic() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/filter.php?a=Non-Alcoholic'
      )
      .pipe(
        map((drinks) => {
          return drinks.drinks;
        })
      );
  }

  getA() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=a'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getB() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=b'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getC() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=c'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getD() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=d'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getE() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=e'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getF() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=f'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getG() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=g'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getH() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=h'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getI() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=i'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getJ() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=j'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getK() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=k'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getL() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=l'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getM() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=m'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getN() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=n'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getO() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=o'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getP() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=p'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getQ() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=q'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getR() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=r'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getS() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=s'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getT() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=t'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getU() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=u'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getV() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=v'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getW() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=w'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getX() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=x'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getY() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=y'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
  getZ() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' +
          environment.cocktailDBKey +
          '/search.php?f=z'
      )
      .pipe(
        map((drinks) => {
          console.log(drinks);
          return drinks.drinks;
        })
      );
  }
}
