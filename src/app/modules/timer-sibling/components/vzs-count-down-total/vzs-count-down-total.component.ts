import { Component, OnInit } from '@angular/core';
import { VzCountTwoService } from '../../services/vz-count-two.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vzs-count-down-total',
  templateUrl: './vzs-count-down-total.component.html',
  styleUrls: ['./vzs-count-down-total.component.scss']
})
export class VzsCountDownTotalComponent implements OnInit {

  getCountStart = 0;
  getCountPause = 0;
  subscription: Subscription;
  
  constructor(private vzcountservice : VzCountTwoService) { }

  ngOnInit(): void {
    this.subscription = this.vzcountservice.getStartPauseCount().subscribe(getCount => { 
    this.getCountStart = getCount.count.setStart;
    this.getCountPause = getCount.count.setPause;
    console.log(getCount.count);
    })

  }

}
