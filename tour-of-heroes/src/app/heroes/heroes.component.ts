import { Component } from '@angular/core';
import {Hero} from '../hero';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero:Hero = {
    id:0,
    name: 'Winston'
  };

  get heroNameUppercase(): string {
    return this.hero?.name?.toUpperCase() || 'UNKNOWN';
  }

}
