import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { MissionDetailsRootObject } from '../mission-details-rootobject';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpService) { }

  missionDetails:MissionDetailsRootObject;

  ngOnInit(): void {
    this.http.GetMissionById(this.route.snapshot.paramMap.get('id'))
    .subscribe((data:MissionDetailsRootObject) => this.missionDetails = data);
  }

}
