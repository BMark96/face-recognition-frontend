import { Component } from '@angular/core';
import { ComparatorService } from '../../services/comparator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private comparatorService: ComparatorService) {}

  getMessage() {
    return this.comparatorService.getMessage();
  }
}
