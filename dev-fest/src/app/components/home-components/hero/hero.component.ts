import { Component, OnInit } from '@angular/core';
import {SessionsComponent} from "../../../pages/sessions/sessions.component";
import {PresentateursComponent} from "../../../pages/presentateurs/presentateurs.component";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent  implements OnInit {

  titleHero!: string
  sessionListComponent = SessionsComponent;
  presentateurListComponent = PresentateursComponent;

  constructor() {
    this.titleHero = "Conférence";
  }

  ngOnInit() {}

}
