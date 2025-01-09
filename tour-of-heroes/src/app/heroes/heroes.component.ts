import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {Hero} from '../hero';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Hero[] = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  

}
