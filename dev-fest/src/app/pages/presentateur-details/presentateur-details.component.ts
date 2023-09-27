import { Component, OnInit } from '@angular/core';
import {ListItemsComponent} from "../../shared/list-items/list-items.component";
import {SessionDetailsComponent} from "../session-details/session-details.component";
import {NoteComponent} from "../../components/note-components/note.component";

@Component({
  selector: 'app-presentateur-details',
  templateUrl: './presentateur-details.component.html',
  styleUrls: ['./presentateur-details.component.scss'],
})
export class PresentateurDetailsComponent  implements OnInit {

  makeNotes = NoteComponent;

  constructor() { }

  ngOnInit() {}

}
