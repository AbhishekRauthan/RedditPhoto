import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RedditData } from '../interfaces/reddit-data';

@Injectable({
  providedIn: 'root'
})
export class GetRedditDataService {

  constructor(private http: HttpClient) { }

  getData(subReddit: string, param: string): Observable<RedditData> {
    return this.http.get<RedditData>(`http://www.reddit.com/${subReddit}/${param}/.json`)
  }
}
