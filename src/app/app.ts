import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, RouterLink],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TpFinalAngular');
}
