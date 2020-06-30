import { Component, OnInit } from '@angular/core';
import { LaunchRootObject } from '../http.service'
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(private client: HttpService) { }

  launches:LaunchRootObject;


  ngOnInit(): void {
    this.client.GetAllLauches().subscribe((data:LaunchRootObject) =>{
      console.log(data); //this is working
      this.launches = data;
      console.log(this.launches);
    });  
  
  }

}
