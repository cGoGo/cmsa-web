import { Component } from '@angular/core';
import { CONTENT, SLIDES, THERAPIES } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public content = CONTENT;
  public slides = SLIDES;
  public therapies = THERAPIES;
}