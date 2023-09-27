import {Component, Input, OnInit, Output} from '@angular/core';
import {HeroComponent} from "../../components/home-components/hero/hero.component";
import {PresentateursComponent} from "../presentateurs/presentateurs.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
