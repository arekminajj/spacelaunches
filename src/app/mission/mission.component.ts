import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MissionRootObject } from '../mission-rootobject';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  constructor(private http: HttpService) { }

  missions:MissionRootObject;

  ngOnInit(): void {
    this.http.GetAllMissions().subscribe((data:MissionRootObject) => {
      this.missions = data
      console.log(data)
    })
  }

}
