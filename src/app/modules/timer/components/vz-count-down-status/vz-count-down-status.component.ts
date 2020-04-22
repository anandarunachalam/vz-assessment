import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vz-count-down-status',
  templateUrl: './vz-count-down-status.component.html',
  styleUrls: ['./vz-count-down-status.component.scss']
})
export class VzCountDownStatusComponent {

 @Input() getCountStatus;

}
