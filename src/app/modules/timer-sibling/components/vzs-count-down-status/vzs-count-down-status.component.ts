import { Component, OnInit } from '@angular/core';
import { VzCountTwoService } from '../../services/vz-count-two.service';

@Component({
  selector: 'app-vzs-count-down-status',
  templateUrl: './vzs-count-down-status.component.html',
  styleUrls: ['./vzs-count-down-status.component.scss']
})
export class VzsCountDownStatusComponent implements OnInit {

  getCountMsg: any;
  constructor(private vzcountservice: VzCountTwoService) { }

  ngOnInit(): void {
    this.vzcountservice.getCountDownMessage().subscribe(getMsg => { 
       this.getCountMsg =  getMsg.message;
       console.log(getMsg);
    })
  }

  

}
