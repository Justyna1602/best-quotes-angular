import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quotation} from '../models/quotation';

@Component({
  selector: 'app-votes-button',
  templateUrl: './votes-button.component.html',
  styleUrls: ['./votes-button.component.css']
})
export class VotesButtonComponent {

  @Output() voteValue = new EventEmitter<void>();


}
