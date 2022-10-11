import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quotation} from '../models/quotation';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  @Output() vote = new EventEmitter<QuotationEvent>();

  @Input()
  quotes: Quotation[];


  addVote(quotation: Quotation, value: number) {
    this.vote.emit({quotation, value});
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}

