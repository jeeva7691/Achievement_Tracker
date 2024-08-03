import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'AchievementDashboard',
    pathMatch:'full'
  },
  {
    path:'AchievementDashboard',
    component:DashboardComponent,
    pathMatch:'full'  
  },
  {
    path:'AddAchievement',
    component:FormsComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
