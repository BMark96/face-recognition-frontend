import { Component } from '@angular/core';

import { ComparatorService } from '../../services/comparator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private comparatorService: ComparatorService) {}

  /**
   * Get feedback message shown in second line of toolbar.
   * @returns       Toolbar message.
   */
  getMessage() {
    return this.comparatorService.getMessage();
  }
}
