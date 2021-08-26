import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  aleryMe(message:String){
    alert(message)
  }

  constructor() { }
}
