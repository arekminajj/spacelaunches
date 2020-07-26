import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LaunchComponent } from './launch/launch.component';
import { LaunchDetailsRootObject } from './launch-details-rootobject';
import { AgenciesRootObject } from './agencies-rootobject';
import { MissionRootObject } from './mission-rootobject';
import { MissionDetailsRootObject } from './mission-details-rootobject';
import { RocketRootObject } from './rocket-rootobject';
import { RocketDetailsRootObject } from './RocketDetails-rootobject';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base_url = "https://launchlibrary.net/1.4/";

  GetAllLauches() {
    return this.http.get<LaunchRootObject>(this.base_url + 'launch');
  }

  GetLaunchById(id:string) {
    return this.http.get<LaunchDetailsRootObject>(this.base_url + 'launch/'+ id)
  }

  GetAllAgencies() {
    return this.http.get<AgenciesRootObject>(this.base_url + 'agency');
  }

  GetAllMissions() {
    return this.http.get<MissionRootObject>(this.base_url + 'mission');
  }

  GetMissionById(id:string) {
    return this.http.get<MissionDetailsRootObject>(this.base_url + 'mission/' + id)
  }

  GetAllRockets() {
    return this.http.get<RocketRootObject>(this.base_url + '/rocket')
  }

  GetRocketById(id:string) {
    return this.http.get<RocketDetailsRootObject>(this.base_url + '/rocket/' + id)
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
