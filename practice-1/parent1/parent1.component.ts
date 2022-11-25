import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
hi :any
profile = [{
  srno : 1,
  name : 'praful'
},{
  srno : 2,
  name : 'Rushikesh'
}]
  constructor() { }

  ngOnInit(): void {
  }
  data(){
this.hi = this.profile
  }
  bb:any
  message(aa:any){
this.bb = aa
  }
  dd:any
  ee:any
  hello(cc:any){
this.dd = cc
  }
  hello1(){
this.ee = this.dd
  }
}
