import { Injectable, signal } from '@angular/core';
import { AnnualInvestmentResult, InvestmentInput } from '../investment-input.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private results = signal<AnnualInvestmentResult[] | null>(null);

  public getResult() {
    return this.results()
  }

  public calculateInvestmentResults({
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
