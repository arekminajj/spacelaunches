import { Component, OnInit } from '@angular/core';
import { RocketRootObject } from '../rocket-rootobject';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  constructor(private http:HttpService) { }

  rockets:RocketRootObject;

  ngOnInit(): void {
    this.http.GetAllRockets().subscribe((data:RocketRootObject) => {
      this.rockets = data 
    })
  }

}
