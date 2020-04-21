import { Component, OnInit } from '@angular/core';
import { RmsShowService } from '../../services/vz-product-list.service';
import {Page, Character, FILTER} from '../../models/vz-product-list.model';

@Component({
  selector: 'app-vz-product-list',
  templateUrl: './vz-product-list.component.html',
  styleUrls: ['./vz-product-list.component.scss']
})
export class VzProductListComponent implements OnInit {

  listView :any = 25;
  sortOrder: string;
  prodList: any[];  

  page:Page = {
    count:0,
    currentpage:1,
    pages:0,
    perPage:20
  };

  constructor(private _rmsService: RmsShowService) { }  

  ngOnInit(): void {    
    this.getProductList(1)
  }  
  
  setProductView(mode) {
    this.listView = mode;
  }
  
  getProductList(page:number){
    let query = '';    
    this._rmsService.getProductList(page,query).subscribe(
      (res:{info:any,results:Character[]})=>{
        this.page.count = res.info.count;
        this.page.pages = res.info.pages;
        this.prodList = res.results;
      },
      err=>{
      }
    )
  }

}
