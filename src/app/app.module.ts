import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeComponent } from './components/joke/joke.component';
import { AddJokeComponent } from './components/add-joke/add-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokesComponent,
    JokeComponent,
    AddJokeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
