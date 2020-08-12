import { Component, OnInit } from '@angular/core';
import { IBondTable } from './bond-table.model';

@Component({
  selector: 'app-bond-review',
  templateUrl: './bond-review.component.html',
  styleUrls: ['./bond-review.component.scss']
})
export class BondReviewComponent implements OnInit {
  public initialBalance: number = 0;
  public calculationPeriod: number = 0;
  public monthlyInvestment: number = 0;
  public totalMonthlyInvestment: number = 0;
  public interestRate: number = 0;
  public currentTotal: number = 0;
  public compoundTotal: number = 0;
  public bondTable: Array<IBondTable> = Object.assign([]);
  public monthEarnedInterest: number = 0;
  public totalInterestEarned: number = 0;
  public afterReinvestment: number = 0;
  public reminderBalance: number = 0;
  public bondReinvestedCount: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.initialBalance = 0;
    this.calculationPeriod = 10;
    this.monthlyInvestment = 10000;
    this.interestRate = 7.16;
    this.setTableData();
  }

  setTableData(){
    this.currentTotal = 0;
    this.compoundTotal = 0
    for(let i=1;i<=(this.calculationPeriod*12);i++){
      const tempMonth = i;
      this.monthEarnedInterest = 0;
      this.currentTotal = this.currentTotal + this.monthlyInvestment;
      this.compoundTotal = this.compoundTotal + this.monthlyInvestment;
      this.totalMonthlyInvestment = this.monthlyInvestment;
      if(i>6){
        this.monthEarnedInterest = Math.floor(((this.compoundTotal-10000)/10000)/6)*((this.interestRate*100)/2);
      }
      this.totalInterestEarned = this.totalInterestEarned + this.monthEarnedInterest;
      this.afterReinvestment = this.afterReinvestment + this.monthEarnedInterest;
      if(this.afterReinvestment>10000){
        this.compoundTotal = this.compoundTotal + (Math.floor(this.afterReinvestment/10000)*10000);
        this.bondReinvestedCount = this.bondReinvestedCount + (Math.floor(this.afterReinvestment/10000))*10000;
        this.totalMonthlyInvestment = this.totalMonthlyInvestment + (Math.floor(this.afterReinvestment/10000))*10000;
        this.afterReinvestment = this.afterReinvestment - (Math.floor(this.afterReinvestment/10000)*10000);
      }
      this.reminderBalance =  this.totalInterestEarned%10000;
      this.bondTable.push({
        investedTotal :  this.currentTotal,
        monthlyInvestment : this.monthlyInvestment,
        month: tempMonth,
        monthlyInterestEarning: this.monthEarnedInterest,
        totalInterestEarned: this.totalInterestEarned,
        compoundTotal: this.compoundTotal,
        reminderBalance: this.reminderBalance,
        bondReinvestedCount: this.bondReinvestedCount,
        totalMonthlyInvestment: this.totalMonthlyInvestment
      })
    }
  }


  // setTableData(){
  //   this.currentTotal = 0;
  //   this.compoundTotal = 0
  //   for(let i=1;i<=(this.calculationPeriod*12);i++){
  //     const tempMonth = i;
  //     this.monthEarnedInterest = 0;
  //     this.currentTotal = this.currentTotal + this.monthlyInvestment;
  //     this.compoundTotal = this.compoundTotal + this.monthlyInvestment;
  //     if(i>6){
  //       this.monthEarnedInterest = Math.floor(((this.currentTotal-10000)/10000)/6)*358;
  //     }
  //     this.totalInterestEarned = this.totalInterestEarned + this.monthEarnedInterest;
  //     this.afterReinvestment = this.afterReinvestment + this.monthEarnedInterest;
  //     if(this.totalInterestEarned>10000){
  //       this.compoundTotal = this.compoundTotal + Math.floor(this.afterReinvestment/10000);
  //       this.bondReinvestedCount = this.bondReinvestedCount + (Math.floor(this.afterReinvestment/10000))*10000;
  //       this.afterReinvestment = this.afterReinvestment - Math.floor(this.afterReinvestment/10000);
  //     }
  //     this.reminderBalance =  this.totalInterestEarned%10000;
  //     this.bondTable.push({
  //       investedTotal :  this.currentTotal,
  //       monthlyInvestment : this.monthlyInvestment,
  //       month: tempMonth,
  //       monthlyInterestEarning: this.monthEarnedInterest,
  //       totalInterestEarned: this.totalInterestEarned,
  //       compoundTotal: this.compoundTotal,
  //       reminderBalance: this.reminderBalance
  //     })
  //   }
  // }


}
