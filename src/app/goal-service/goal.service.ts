import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() {}
  getGoals(){
    return Goals;
  }
  getGoal(id: number){
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    
    }
    return;
  }
}
