import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Blog} from "../../models/Blog";

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {


  private blog = environment.baseUrl + '/blog';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Blog[]>(this.blog);
  }

}
