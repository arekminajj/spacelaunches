import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { RocketDetailsRootObject } from '../RocketDetails-rootobject';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpService) { }

  rocketDetails:RocketDetailsRootObject;

  ngOnInit(): void {
    this.http.GetRocketById(this.route.snapshot.paramMap.get('id'))
    .subscribe((data:RocketDetailsRootObject) => this.rocketDetails = data);
  }
}
