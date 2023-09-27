import {Component, Input, OnInit} from '@angular/core';
import {HeroComponent} from "../../components/home-components/hero/hero.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {

  title!: string;

  constructor() {
    this.title = "Conférences";
  }

  ngOnInit() {}

}
