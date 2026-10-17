import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { UserInput } from '../components/user-input/user-input';
import { InvestmentResults } from '../components/investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
