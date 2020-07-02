import { Component, OnInit } from '@angular/core';
import { LaunchRootObject } from '../http.service'
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(private client: HttpService, private router:Router) { }

  launches:LaunchRootObject;

  ngOnInit(): void {
    this.client.GetAllLauches().subscribe((data:LaunchRootObject) =>{ 
      this.launches = data;
    });  
  
  }

}
