import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VzCountTwoService {

  constructor() { }

  private countTot = new Subject<any>();
  private countPause = new Subject<any>();
  private countMsg = new BehaviorSubject<any>(0);

    setCountDownTime(setCount: string) { 
      this.countTot.next({ count: setCount });
    }
    getCountDownTime(): Observable<any> {
      return this.countTot.asObservable();
    }
    setCountDownMessage(setMessage: any) { 
      return this.countMsg.next({ message: setMessage})
      console.log(this.countMsg)
    }
    getCountDownMessage() { 
      return this.countMsg.asObservable();
    }
    setStartPauseCount(sCount:any) { 
      return this.countPause.next({ count: sCount})
    }
    getStartPauseCount() { 
      return this.countPause.asObservable();
    }

    
}
