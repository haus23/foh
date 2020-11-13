import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
