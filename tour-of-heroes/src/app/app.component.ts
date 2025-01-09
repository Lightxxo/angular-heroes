import {Component} from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  imports: [MessagesComponent, RouterOutlet, RouterLink],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}