import { Component } from '@angular/core';
import { MapCaseComponent } from './components/map-case.component';

@Component({
  selector: 'app-root',
  imports: [MapCaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Where is Fethi ?';
}
