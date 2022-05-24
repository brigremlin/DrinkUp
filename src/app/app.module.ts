import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrinkDetailsComponent } from './drinks/drink-details/drink-details.component';
import { DrinkListComponent } from './drinks/drink-list/drink-list.component';
import { DrinkItemComponent } from "./drinks/drink-item/drink-item.component";
import { FavoriteListComponent } from './drinks/favorite-list/favorite-list.component';
import { DrinkService } from './drinks/drink.service';
import { HeaderComponent } from './header/header.component';
import { FavoriteService } from './drinks/favorite.service';
import { AppRoutingModule } from './app-routing.module';
import { PantryService } from './shared/pantry.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AComponent } from './letter-pages/a/a.component';
import { BComponent } from './letter-pages/b/b.component';
import { CComponent } from './letter-pages/c/c.component';
import { DComponent } from './letter-pages/d/d.component';
import { EComponent } from './letter-pages/e/e.component';
import { FComponent } from './letter-pages/f/f.component';
import { GComponent } from './letter-pages/g/g.component';
import { HComponent } from './letter-pages/h/h.component';
import { IComponent } from './letter-pages/i/i.component';
import { JComponent } from './letter-pages/j/j.component';
import { KComponent } from './letter-pages/k/k.component';
import { LComponent } from './letter-pages/l/l.component';
import { MComponent } from './letter-pages/m/m.component';
import { NComponent } from './letter-pages/n/n.component';
import { OComponent } from './letter-pages/o/o.component';
import { PComponent } from './letter-pages/p/p.component';
import { QComponent } from './letter-pages/q/q.component';
import { RComponent } from './letter-pages/r/r.component';
import { SComponent } from './letter-pages/s/s.component';
import { TComponent } from './letter-pages/t/t.component';
import { UComponent } from './letter-pages/u/u.component';
import { VComponent } from './letter-pages/v/v.component';
import { WComponent } from './letter-pages/w/w.component';
import { XComponent } from './letter-pages/x/x.component';
import { YComponent } from './letter-pages/y/y.component';
import { ZComponent } from './letter-pages/z/z.component';
import { LetterBarComponent } from './letter-bar/letter-bar.component';
import { MyCabinetComponent } from './my-cabinet/my-cabinet.component';
import { BarComponent } from './bar/bar/bar.component';
import { MyBarService } from './bar/bar/my-bar.service';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './users/profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    DrinkDetailsComponent,
    DrinkListComponent,
    DrinkItemComponent,
    FavoriteListComponent,
    HeaderComponent,
    MyCabinetComponent,
    BarComponent,
    HomeComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent,
    GComponent,
    HComponent,
    IComponent,
    JComponent,
    KComponent,
    LComponent,
    MComponent,
    NComponent,
    OComponent,
    PComponent,
    QComponent,
    RComponent,
    SComponent,
    TComponent,
    UComponent,
    VComponent,
    WComponent,
    XComponent,
    YComponent,
    ZComponent,
    LetterBarComponent,
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [DrinkService, FavoriteService, PantryService, MyBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
