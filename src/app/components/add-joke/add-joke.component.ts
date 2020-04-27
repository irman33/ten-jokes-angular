import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Joke } from '../../models/Joke';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {
  @Output() addJoke: EventEmitter<Joke> = new EventEmitter();

  title: string;
  text: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const joke = {
      id: Date.now(),
      title: this.title,
      text: this.text
    };

    this.addJoke.emit(joke);
  }
}
