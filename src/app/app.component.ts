import { Component } from '@angular/core';
import {Hero} from './hero';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
  title = 'Tour of Heroes';
  myHero = this.heroes[0].name;
  imgUrl = 'someURL';
  
}
