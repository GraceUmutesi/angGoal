import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  styles: ['p {color: red} ']
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService:AlertService;
  quote!: Quote;

  // toggleDetails(index: number){
  //   this.goals[index].showDescription = !this.goals[index].showDescription;
  // }

  goToUrl(id: number){
    this.router.navigate(['/goals',id])
  }
  deleteGoal( index: number){
   
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
        this.alertService.aleryMe("This goal has been deleted")
      }
  
  }
  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router) { 
    this.goals=goalService.getGoals();
    this.alertService=alertService;
  }

  ngOnInit(){
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }

}
