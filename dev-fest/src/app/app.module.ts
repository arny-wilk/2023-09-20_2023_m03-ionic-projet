import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarComponent} from "./shared/toolbar/toolbar.component";
import {NavComponent} from "./shared/nav/nav.component";
import {ListItemsComponent} from "./shared/list-items/list-items.component";
import {DropdownComponent} from "./shared/dropdown/dropdown.component";
import {HomeComponent} from "./pages/home/home.component";
import {HeroComponent} from "./components/home-components/hero/hero.component";
import {PresentateursComponent} from "./pages/presentateurs/presentateurs.component";
import {SessionsComponent} from "./pages/sessions/sessions.component";
import {NoteComponent} from "./components/note-components/note.component";
import {PresentateurDetailsComponent} from "./pages/presentateur-details/presentateur-details.component";
import {SessionDetailsComponent} from "./pages/session-details/session-details.component";

@NgModule({
  declarations: [AppComponent
    , ToolbarComponent
    , NavComponent
    , ListItemsComponent
    , DropdownComponent
    , HomeComponent
    , PresentateursComponent
    , SessionsComponent
    , PresentateurDetailsComponent
    , SessionDetailsComponent
    , HeroComponent
    , NoteComponent
    , ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
