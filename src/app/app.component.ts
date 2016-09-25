import {Component, OnInit} from '@angular/core';
import {toast} from "angular2-materialize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit(): void {
    toast("...and Materialize works as well!")
  }
}
