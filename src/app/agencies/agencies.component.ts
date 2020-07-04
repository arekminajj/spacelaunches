import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AgenciesRootObject } from '../agencies-rootobject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  constructor(private http:HttpService) { }

  agencies:AgenciesRootObject;

  ngOnInit(): void {
    this.http.GetAllAgencies().subscribe((data:AgenciesRootObject) =>{
      this.agencies = data
    });
  }

}
