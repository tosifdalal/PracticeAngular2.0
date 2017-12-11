import { ReciepeService } from './reciepe/reciepe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ReciepeService]
})
export class AppComponent {
  title = 'Amazing Food Recipies';
}


