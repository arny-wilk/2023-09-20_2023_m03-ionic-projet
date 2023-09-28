import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Speaker} from "../../models/Speaker";

@Injectable({
  providedIn: 'root'
})
export class SpeakersHttpService {

  private speakers = environment.baseUrl + '/speakers';
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Speaker[]>(this.speakers);
  }
}
