import {Injectable} from '@angular/core';
import {SpeakersHttpService} from "../../../providers/speakers-service/speakers-http.service";
import {pipe, Subject} from "rxjs";
import {Speaker} from "../../../models/Speaker";

@Injectable({
  providedIn: 'root'
})
export class PresentateursService extends Subject<Speaker> {

  public entitiesSubject: Subject<Speaker[]> = new Subject<Speaker[]>();

  constructor() {
    super()
  }

}
