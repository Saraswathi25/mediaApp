import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jsondata: any;
  mainProduct:any;
  subProduct:any;
  productCount:number=1;
  Price:number=0;
  qnty=1;
    getScreenWidth:number=0;
    getScreenHeight:number=0;
    displayData:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.http.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.jsondata = data;
      this.mainProduct=this.jsondata.mainProduct;
      this.subProduct=this.jsondata.subProduct;
       console.log(this.mainProduct);
       this.displayData = this.jsondata.subProduct.slice(0,3); 


  });
 
}
@HostListener('window:resize', ['$event'])
onWindowResize() {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;
  
}
addProduct(temp_package: any){
  // this.productCount += 1;

  // this.cost = this.cost * this.productCount;

  this.qnty +=temp_package.qnty++;
  temp_package.costValue = temp_package.costValue * this.qnty;

}
removeProduct(temp_package: any){
  this.qnty -=temp_package.qnty--;
  temp_package.costValue = temp_package.costValue * this.qnty;
 
}
showMore() {
  let newLength = this.displayData.length + 3;
  if (newLength > this.subProduct.length) {
      newLength = this.subProduct.length
  }
   this.displayData = this.jsondata.subProduct.slice(0, newLength);
}
}
