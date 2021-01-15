import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../../config.json';

const url = config.URL_BACK;

const url_getImg = "/api/listImgs";
const url_getTemp = "/api/listTemp";
const url_getSave = "/api/saveFields";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getImages (req) : Observable<any> {

    return this.http.post<any>(url + url_getImg, req);
  }

  getTemp () : Observable<any> {

    return this.http.get<any>(url + url_getTemp);
  }

  saveFields (req) : Observable<any> {

    return this.http.post<any>(url + url_getSave, req);
  }
}
