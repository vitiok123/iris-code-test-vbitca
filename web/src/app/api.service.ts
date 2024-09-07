import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getSubdivisions() {
    return this.http.get('/v1/subdivisions').pipe(map((data: any) => data.subdivisions));
  }
}
