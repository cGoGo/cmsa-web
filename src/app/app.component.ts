import { Component } from '@angular/core';
import { SLIDES, TEXTS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slides = SLIDES;
  public texts = TEXTS;
}