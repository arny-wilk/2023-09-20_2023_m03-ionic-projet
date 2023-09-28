import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Schedule} from "../../models/Schedule";

@Injectable({
  providedIn: 'root'
})
export class ScheduleHttpService {

  private schedule = environment.baseUrl + '/schedule';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Schedule[]>(this.schedule);
  }
}
