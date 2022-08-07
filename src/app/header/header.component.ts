import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDropdown:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }
  dropdown(){
    this.showDropdown =!this.showDropdown;
  }
}
