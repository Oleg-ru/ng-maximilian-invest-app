import { Component, signal } from '@angular/core';
import { Header } from '../components/header/header';
import { UserInput } from '../components/user-input/user-input';
import { AnnualInvestmentResult, InvestmentInput } from '../investment-input.model';
import { InvestmentResults } from '../components/investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  results = signal<AnnualInvestmentResult[] | null>(null);

  onCalculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: InvestmentInput) {
    const annualData: AnnualInvestmentResult[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.results.set(annualData);
  }
}
