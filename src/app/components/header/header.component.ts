import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open: boolean = false;
  title: string = '10 Jokes';

  constructor() {}

  ngOnInit(): void {}
}
