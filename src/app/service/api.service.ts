import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  Post<T>(apiEndPoint: string, data: unknown): Observable<T> {
    return this.httpClient.post<T>(environment.url + apiEndPoint, data);
  }

  Get<T>(apiEndPoint: string, queryParams?: unknown): Observable<T> {
    // let qp = this.utilityService.jsonToQueryString(queryParams)
    return this.httpClient.get<T>(environment.url + apiEndPoint)
  }


  private achievements = [
    {
      date: '2024-07-20',
      description: 'Completed Full Stack Development Course',
      reason: 'Gained comprehensive knowledge in both frontend and backend development.',
      attachments: [
        '/assets/logo.jpg', // image example
      ]
    },
    {
      date: '2024-08-01',
      description: 'Won Hackathon Competition',
      reason: 'Developed a winning project in a competitive environment.',
      attachments: [
        '/assets/logo.jpg', // image example
      ]
    },
    {
      date: '2024-08-01',
      description: 'Won Hackathon Competition',
      reason: 'Developed a winning project in a competitive environment.',
      attachments: [
        '/assets/logo.jpg', // image example
      ]
    },
    {
      date: '2024-08-01',
      description: 'Won Hackathon Competition',
      reason: 'Developed a winning project in a competitive environment.',
      attachments: [
        '/assets/logo.jpg', // image example
      ]
    },
    {
      date: '2024-08-01',
      description: 'Won Hackathon Competition',
      reason: 'Developed a winning project in a competitive environment.',
      attachments: [
        '/assets/logo.jpg', // image example
      ]
    },
    {
      date: '2024-07-20',
      description: 'Completed Full Stack Development Course',
      reason: 'Gained comprehensive knowledge in both frontend and backend development.',
      attachments: [
        '/assets/logo.jpg', // image example
      ]
    },
    // Add more sample data as needed
  ];

  getAchievements(): Observable<any[]> {
    return of(this.achievements);
  }

  // Optional: Add methods to add, update, or delete achievements
  addAchievement(achievement: any): Observable<any> {
    this.achievements.push(achievement);
    return of(achievement);
  }
}
