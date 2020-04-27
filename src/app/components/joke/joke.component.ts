import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/models/Joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  constructor() {}

  ngOnInit(): void {}
}
