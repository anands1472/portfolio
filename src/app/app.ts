import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
@Component({
  selector: 'app-root',
  imports: [ButtonModule, Home, Header],
  template: `
  
  <app-header />
  <app-home />
  `,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'anand-pilli';
}
