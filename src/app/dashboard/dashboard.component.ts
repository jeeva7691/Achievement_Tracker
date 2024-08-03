import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ApiList } from '../variables/apiList';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  achievements!:any[]
  achievements2!:any | unknown[]

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  this.getAchievements()
  this.getAchievementsFromBE()
  }


  getAchievements()
  {
    this.apiService.getAchievements().subscribe(data => {
      this.achievements = data;
      console.log('achievements',this.achievements)
    });
  }

  getAchievementsFromBE()
  {
    this.apiService.Get(ApiList.getAchievements).subscribe(data => {
      this.achievements2 = data;
      console.log('achievements',this.achievements)
    });
  }

  isImage(url: string): boolean {
    return /\.(jpg|jpeg|png|gif)$/i.test(url);
  }
  
  getFileName(url: string): string {
    return url.split('/').pop() || 'Unknown file';
  }


}
