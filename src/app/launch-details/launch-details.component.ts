import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { LaunchDetailsRootObject } from '../launch-details-rootobject';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpService) { }

  launchDetails:LaunchDetailsRootObject;


  ngOnInit(): void {
    this.http.GetLaunchById(this.route.snapshot.paramMap.get('id'))
    .subscribe((data: LaunchDetailsRootObject) => this.launchDetails = data)
  }

}
