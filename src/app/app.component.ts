import { Component } from '@angular/core';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  imports: [
    CoreModule
  ],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent { }
