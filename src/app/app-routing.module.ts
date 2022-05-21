import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BarComponent } from './bar/bar/bar.component';
import { DrinkDetailsComponent } from './drinks/drink-details/drink-details.component';
import { DrinkListComponent } from './drinks/drink-list/drink-list.component';
import { FavoriteListComponent } from './drinks/favorite-list/favorite-list.component';
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
import { MyCabinetComponent } from './my-cabinet/my-cabinet.component';
import { ProfileComponent } from './users/profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cocktails/:id', component: DrinkDetailsComponent},
  { path: "cocktails", component: DrinkListComponent, children: [
    { path: ":id", component: DrinkDetailsComponent }
  ]},
  { path: "favorite", component: FavoriteListComponent },
  { path: "bar", component: BarComponent },
  { path: "cabinet", component: MyCabinetComponent},
  { path: 'a', component: AComponent},
  { path: 'b', component: BComponent},
  { path: 'c', component: CComponent},
  { path: 'd', component: DComponent},
  { path: 'e', component: EComponent},
  { path: 'f', component: FComponent},
  { path: 'g', component: GComponent},
  { path: 'h', component: HComponent},
  { path: 'i', component: IComponent},
  { path: 'j', component: JComponent},
  { path: 'k', component: KComponent},
  { path: 'l', component: LComponent},
  { path: 'm', component: MComponent},
  { path: 'n', component: NComponent},
  { path: 'o', component: OComponent},
  { path: 'p', component: PComponent},
  { path: 'q', component: QComponent},
  { path: 'r', component: RComponent},
  { path: 's', component: SComponent},
  { path: 't', component: TComponent},
  { path: 'u', component: UComponent},
  { path: 'v', component: VComponent},
  { path: 'w', component: WComponent},
  { path: 'x', component: XComponent},
  { path: 'y', component: YComponent},
  { path: 'z', component: ZComponent},
  { path: 'auth',
    component: AuthComponent
 },
 { path: 'user', component: ProfileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
