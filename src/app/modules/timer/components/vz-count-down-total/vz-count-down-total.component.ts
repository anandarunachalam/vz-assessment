import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vz-count-down-total',
  templateUrl: './vz-count-down-total.component.html',
  styleUrls: ['./vz-count-down-total.component.scss']
})
export class VzCountDownTotalComponent {

  @Input() getCountStart;
  @Input() getCountPause;

}
