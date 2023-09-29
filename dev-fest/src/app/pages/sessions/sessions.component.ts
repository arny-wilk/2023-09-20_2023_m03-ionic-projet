import { Component, OnInit } from '@angular/core';
import {Session} from "../../models/Session";
import {SessionsHttpService} from "../../providers/sessions-service/sessions-http.service";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent  implements OnInit {

  isModalOpen: boolean = false;
  sessions: Session[] = [];
  id!: string;
  session!: Session;

  constructor(private serviceSession: SessionsHttpService) {}

  ngOnInit() {
    this.serviceSession.get().subscribe(
      value => {
        this.sessions = Object.values(value);
      }
    )
  }

  setOpen(isOpen: boolean, session?: Session) {
    this.isModalOpen = isOpen;
    if(session) {
      this.session = session;
    }
  }

}
