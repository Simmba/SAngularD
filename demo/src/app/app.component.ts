import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      {{title}}
    </h1>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moody\'s Analytics';
}
