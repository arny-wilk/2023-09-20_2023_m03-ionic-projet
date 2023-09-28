import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DbHttpService {

  private db = environment.baseUrl + '/db';

  constructor(private http: HttpClient) {}

}
