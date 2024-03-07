import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css', // we could reference multiple external style sheet here.
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ], // This also takes array of strings where you can define the style of string - have multiple files or style definitions
})
export class AppComponent {
  title = 'Gs-English';
}
