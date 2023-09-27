import {Component, Input, OnInit} from '@angular/core';
import {HomeComponent} from "../../pages/home/home.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  homePage = HomeComponent;

}
