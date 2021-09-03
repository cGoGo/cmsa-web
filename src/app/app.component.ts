import { Component } from '@angular/core';
import { CONTENT, FOOTER, INTEGRATIVES, SLIDES, THERAPIES } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public content = CONTENT;
  public footer = FOOTER;
  public integratives = INTEGRATIVES;
  public slides = SLIDES;
  public therapies = THERAPIES;

  public index = 0;

  public setIndex(index: number) {
    this.index = index;
    return;
  }
}