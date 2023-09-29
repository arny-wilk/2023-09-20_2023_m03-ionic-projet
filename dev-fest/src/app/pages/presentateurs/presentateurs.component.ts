import {Component, OnInit} from '@angular/core';
import {SpeakersHttpService} from "../../providers/speakers-service/speakers-http.service";
import {Speaker} from "../../models/Speaker";
import {PresentateursService} from "./providers/presentateurs.service";

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent implements OnInit {

  isModalOpen: boolean = false;
  speakers: Speaker[] = [];
  id!: string;
  profile!: Speaker;

  constructor(private servicePresentateur: SpeakersHttpService, private subjectBehaviour: PresentateursService) {
  }

  ngOnInit() {
    this.servicePresentateur.get().subscribe((value) => {
        this.speakers = Object.values(value);
      }
    );
  }

  setOpen(isOpen: boolean, profile?: Speaker) {
    this.isModalOpen = isOpen;
    if (profile) {
      this.profile = profile;
      console.log(this.profile);
    }
  }

}
