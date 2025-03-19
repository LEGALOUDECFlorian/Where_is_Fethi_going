import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapCaseComponent } from './components/map-case.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapCaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'where_s_fethi_going';
}
