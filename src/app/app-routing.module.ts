import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { MissionComponent } from './mission/mission.component';


const routes: Routes = [
  {path:'launches', component: LaunchComponent},
  {path:'launches/:id', component: LaunchDetailsComponent},
  {path:'agencies', component: AgenciesComponent},
  {path:'missions', component: MissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
