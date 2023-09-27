import { Component, OnInit } from '@angular/core';
import {PresentateurDetailsComponent} from "../presentateur-details/presentateur-details.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent  implements OnInit {

  component = PresentateurDetailsComponent;

  constructor() { }

  ngOnInit() {}

}
