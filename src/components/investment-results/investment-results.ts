import { Component, Input } from '@angular/core';
import { AnnualInvestmentResult, InvestmentInput } from '../../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input({ required: true }) results!: AnnualInvestmentResult[] | null;
}
