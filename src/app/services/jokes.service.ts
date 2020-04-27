import { Injectable } from '@angular/core';
import { Joke } from '../models/Joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  constructor() {}

  getJokes() {
    return JSON.parse(localStorage.getItem('jokes'));
  }

  setJokes(jokes: Joke[]) {
    localStorage.setItem('jokes', JSON.stringify(jokes));
  }
}
