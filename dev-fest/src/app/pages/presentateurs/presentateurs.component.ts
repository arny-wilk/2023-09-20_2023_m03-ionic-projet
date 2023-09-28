import {Component, OnInit, OnDestroy} from '@angular/core';
import {SpeakersHttpService} from "../../providers/speakers-service/speakers-http.service";
import {Speaker} from "../../models/Speaker";
import {PresentateursService} from "./providers/presentateurs.service";
import {map, pipe} from "rxjs";

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent implements OnInit, OnDestroy {

  isModalOpen: boolean = false;
  speakers: Speaker[] = [];
  id!: string;
  profile!: Speaker;

  constructor(private servicePresentateur: SpeakersHttpService, private subjectBehaviour: PresentateursService) {
  }

  ngOnInit() {
    this.servicePresentateur.get().subscribe((value) => {
        this.speakers = Object.values(value)
      }
    );
    if(this.isModalOpen){
      this.selectSpeaker(this.id);
    }
  }

  ngOnDestroy() {
    if(!this.isModalOpen){
    }
  }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  selectSpeaker(id: string) {
    this.subjectBehaviour.entitiesSubject.subscribe(
      pipe(
        () => map(
          () => this.profile = this.speakers
              .filter(value => value.id === parseInt(id) ? value : null)
              .reduce(previousValue => previousValue))));
    return this.profile;
  }

}
