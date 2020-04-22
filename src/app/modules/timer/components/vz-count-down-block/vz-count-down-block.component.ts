import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vz-count-down-block',
  templateUrl: './vz-count-down-block.component.html',
  styleUrls: ['./vz-count-down-block.component.scss']
})
export class VzCountDownBlockComponent {

  @Input() getCount;
 
}
