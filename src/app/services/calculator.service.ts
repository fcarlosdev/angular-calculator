import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  calculate(value1: number, value2: number, operation: string) {
    switch (operation) {
      case '+':
        return this.add(value1, value2);
      case '-':
        return this.subtract(value1, value2);
      case '*':
        return this.multiply(value1, value2);
      case '/':
        return this.divide(value1, value2);
      default:
        return 0;
    }
  }

  private add(number1: number, number2: number): number {
    return (number1 += number2);
  }

  private subtract(number1: number, number2: number): number {
    return (number1 -= number2);
  }

  private multiply(number1: number, number2: number): number {
    return (number1 *= number2);
  }

  private divide(number1: number, number2: number): number {
    return number2 <= 0 ? 0 : (number1 /= number2);
  }
}
