import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  class: string;
  section: string;
  sub1: string;
  sub2: string;
  sub3: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "Anand", class: 'Msc', section: "B", sub1: 'English', sub2: 'Maths',sub3: 'Physics'},
  {name: "Arun", class: 'Msc', section: "C", sub1: 'English', sub2: 'Maths',sub3: 'Physics'},
  {name: "Raja", class: 'Msc', section: "D", sub1: 'English', sub2: 'Maths',sub3: 'Physics'},
  {name: "Ram", class: 'Msc', section: "E", sub1: 'English', sub2: 'Maths',sub3: 'Physics'}

 
];
@Component({
  selector: 'app-vz-dynamic-table',
  templateUrl: './vz-dynamic-table.component.html',
  styleUrls: ['./vz-dynamic-table.component.scss']
})
export class VzDynamicTableComponent implements OnInit {

  displayedColumns: string[] = ['name','class','section','sub1','sub2','sub3'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    //this.dataSource.sort = this.sort;
  }
  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }

}
