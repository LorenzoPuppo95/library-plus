import { Component } from '@angular/core';
import { RouterOutlet , RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule , HomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'library-plus welcomes you';
}
