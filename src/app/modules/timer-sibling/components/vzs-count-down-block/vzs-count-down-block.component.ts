import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VzCountTwoService } from '../../services/vz-count-two.service';

@Component({
  selector: 'app-vzs-count-down-block',
  templateUrl: './vzs-count-down-block.component.html',
  styleUrls: ['./vzs-count-down-block.component.scss']
})
export class VzsCountDownBlockComponent implements OnInit {

  constructor(private vzCountService: VzCountTwoService,) {}
  message: any;
  getCount: any;
  subscription: Subscription;

  countTimeLeft: number = 0;
  countInterval;
  countSubscribe: any;
  countStart = 0;
  countPause = 0;
  countPauseStatus = false;
  countAddedRecent = []
  getTimeStmp: number = Date.now();

  ngOnInit(): void {    
    this.subscription = this.vzCountService.getCountDownTime().subscribe(getCount => {
       this.getCount = getCount;       
       this.countTimeLeft = this.getCount.count;
       //console.log(this.countTimeLeft)
       clearInterval(this.countInterval); 
       this.setCountTimerStatus();
       this.setCountStartTimer();
      });     
  }

  setCountTimerStatus() { 
    if(this.countPauseStatus === false ) {
       this.countPauseStatus = true;
       this.countAddedRecent.push({timestamp:this.getTimeStmp,status:"Started at"});
       this.countStart++       
    } else {
       this.countPauseStatus = false;
       this.countAddedRecent.push({timestamp:this.getTimeStmp,status:"Paused at"});     
       this.countPause++
    }
      this.vzCountService.setCountDownMessage(this.countAddedRecent);
      this.vzCountService.setStartPauseCount({setStart:this.countStart,setPause:this.countPause})  
  }

  setCountStartTimer() {
    this.countInterval = setInterval(() => {
      if (this.countTimeLeft > 0) {
        this.countTimeLeft--;
      } else {
        this.countTimeLeft = 60;
      }      
    }, 1000)
    
  }

  setCountPauseTimer() {
    this.countTimeLeft = 0;
    clearInterval(this.countInterval);
  }

  

}
