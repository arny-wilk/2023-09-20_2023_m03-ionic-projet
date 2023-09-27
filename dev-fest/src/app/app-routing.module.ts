import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SessionsComponent} from "./pages/sessions/sessions.component";
import {PresentateursComponent} from "./pages/presentateurs/presentateurs.component";
import {PresentateurDetailsComponent} from "./pages/presentateur-details/presentateur-details.component";
import {SessionDetailsComponent} from "./pages/session-details/session-details.component";

const routes: Routes = [
  {path: 'sessions-details', component: SessionDetailsComponent},
  {path: 'presentateur-details', component: PresentateurDetailsComponent},
  {path: 'presentateurs', component: PresentateursComponent},
  {path: 'sessions', component: SessionsComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
