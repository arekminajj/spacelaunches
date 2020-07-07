import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import {  MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { LaunchComponent } from './launch/launch.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { MissionComponent } from './mission/mission.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LaunchComponent,
    LaunchDetailsComponent,
    AgenciesComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent, LaunchComponent]
})
export class AppModule { }
