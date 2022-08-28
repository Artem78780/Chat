import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User } from './User';
import { DATE } from './date';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  urlChuckNorris: string = 'https://api.chucknorris.io/jokes/random'

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<User[]> {
    const date = of(DATE)
    return date
  }

  getRandomJoke(){
    return this.httpClient.get(this.urlChuckNorris)
  }
}
