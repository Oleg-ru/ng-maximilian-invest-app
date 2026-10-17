import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { UserInput } from '../components/user-input/user-input';

export interface InvestmentInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

@Component({
  selector: 'app-root',
  imports: [Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  calculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: InvestmentInput) {
    const annualData = [];
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

    return annualData;
  }
}
