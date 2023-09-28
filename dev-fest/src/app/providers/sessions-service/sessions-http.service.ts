import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Session} from "../../models/Session";

@Injectable({
  providedIn: 'root'
})
export class SessionsHttpService {

  private sessions = environment.baseUrl + '/sessions';
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Session[]>(this.sessions)
  }
}
