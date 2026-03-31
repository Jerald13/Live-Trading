import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
import { RouterOutlet } from '@angular/router';
>>>>>>> a246f3acc3eaf9d5914f9e8ff468f4d4884573fa

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 16px;">
      <h2>Live Trading LeetCode Sample</h2>

      <p><strong>Input:</strong> {{ prices.join(', ') }}</p>
      <p><strong>Max Profit:</strong> {{ maxProfit }}</p>

      <button (click)="runSample()">Run Sample</button>

      <h3>Logs</h3>
      <div *ngFor="let log of logs">
        {{ log }}
      </div>
    </div>
  `,
})
export class AppComponent {
  prices: number[] = [1, 2, 3, 0, 2];
  maxProfit = 0;
  logs: string[] = [];

  runSample() {
    this.logs = [];
    this.maxProfit = this.calculateMaxProfit(this.prices);
  }

  calculateMaxProfit(prices: number[]) {
    if (prices.length === 0) {
      return 0;
    }

    let hold = -prices[0];
    let sold = 0;
    let rest = 0;

    this.logs.push(
      `Day 0 | price=${prices[0]} | hold=${hold}, sold=${sold}, rest=${rest}`,
    );

    for (let i = 1; i < prices.length; i++) {
      const price = prices[i];
      const previousHold = hold;
      const previousSold = sold;
      const previousRest = rest;
      hold = Math.max(previousHold, previousRest - price);
      sold = previousHold + price;
      rest = Math.max(previousRest, previousSold);

      this.logs.push(
        `Day ${i} | price=${price} | hold=${hold}, sold=${sold}, rest=${rest}`,
      );
    }

    return Math.max(sold, rest);
  }
}
