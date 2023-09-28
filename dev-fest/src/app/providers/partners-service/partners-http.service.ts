import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Partners} from "../../models/Partners";

@Injectable({
  providedIn: 'root'
})
export class PartnersHttpService {

  private partners = environment.baseUrl + '/partners';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Partners[]>(this.partners);
  }
}
