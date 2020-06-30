import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LaunchComponent } from './launch/launch.component';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base_url = "https://launchlibrary.net/1.4/";

  GetAllLauches(){
    return this.http.get<LaunchRootObject>(this.base_url + 'launch');
  }

  constructor(private http: HttpClient) { }
}

export interface Launch {
  id: number;
  name: string;
  windowstart: string;
  windowend: string;
  net: string;
  status: number;
  tbdtime: number;
  vidURLs: string[];
  vidURL?: any;
  tbddate: number;
  probability: number;
  changed: string;
  lsp: string;
}

export interface LaunchRootObject {
  launches: Launch[];
  total: number;
  offset: number;
  count: number;
}
