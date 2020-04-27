import { Component, OnInit } from '@angular/core';
import { Joke } from '../../models/Joke';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes: Joke[];

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.jokes = this.jokesService.getJokes();
  }

  addJoke(joke: Joke) {
    this.jokes.push(joke);
    this.jokesService.setJokes(this.jokes);
  }
}
